import ReactDOMServer from 'react-dom/server'

export default function renderEmail(emailComponent, { renderMailchimpAttr } = {}) {
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
  let markup = doctype + ReactDOMServer.renderToStaticMarkup(emailComponent)

  if (renderMailchimpAttr) {
    markup = markup.replace(/data-mc-/g, 'mc:')
  }

  return markup
}
