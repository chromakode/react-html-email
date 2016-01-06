import cheerio from 'cheerio'
import fetch from 'node-fetch'

function scrapeProperties(html) {
  const $ = cheerio.load(html)

  const columnMap = {
    'Style Element': 'subject',
    'Outlook 2007/10/13 +': 'outlook',
    'Outlook 03/Express/Mail': 'outlook-legacy',
    'iPhone iOS 7/iPad': 'apple-ios',
    'Outlook.com': 'outlook-web',
    'Apple Mail 6.5': 'apple-mail',
    'Yahoo! Mail': 'yahoo-mail',
    'Google Gmail': 'gmail',
    'Android 4 (Gmail) +': 'gmail-android',
  }
  const columnTitles = $('#clients td').map((idx, el) => $(el).text()).get()
  const columns = columnTitles.map(title => {
    const col = columnMap[title]
    if (!col) {
      throw new Error('Unexpected table column encountered. Scraper out of date?')
    }
    return col
  })

  const props = {}
  const propRe = /^[a-z-]+/
  $('#csstable tbody tr:not(.short)').each((idx, el) => {
    let subject
    const data = {}
    $(el).find('td').each((tdIdx, tdEl) => {
      const columnName = columns[tdIdx]
      if (columnName === 'subject') {
        subject = $(tdEl).text()
      } else {
        const $successEl = $(tdEl).find('.success')
        if ($successEl.is('.info')) {
          data[columnName] = $successEl.attr('data-original-title')
        } else {
          data[columnName] = $successEl.is('.true')
        }
      }
    })

    if (!subject) {
      throw new Error('Could not determine table row subject. Scraper out of date?')
    }

    const match = subject.match(propRe)
    const propName = match && match[0]
    if (!propName) {
      return
    }

    if (props.hasOwnProperty(propName)) {
      if (propName === 'background') {
        // skip "CSS3" background property
        return
      } else {
        throw new Error('Unexpected duplicate property row.')
      }
    }

    if (propName === 'border' || propName === 'padding' || propName === 'margin') {
      ['-left', '-right', '-top', '-bottom'].forEach(suffix =>
        props[propName + suffix] = data
      )
    }

    props[propName] = data
  })

  // we take care of this in the default Email component
  props['font-size']['apple-ios'] = true

  return props
}

fetch('https://www.campaignmonitor.com/css/')
  .then(res => res.text())
  .then(body => {
    const props = scrapeProperties(body)
    const propsJSON = JSON.stringify(props)
    process.stdout.write(propsJSON)
  })
  .catch(err => {
    console.error(err)  // eslint-disable-line no-console
    process.exit(1)
  })
