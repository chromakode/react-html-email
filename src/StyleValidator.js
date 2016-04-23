import supportMatrix from './supportMatrix.json'
import colors from 'colors';

const capsRe = /[A-Z]/g

export default class StyleValidator {
  constructor(config) {
    this.setConfig(config)
  }

  setConfig(config) {
    this.config = {
      strict: true,
      warn: true,
      platforms: [
        'gmail',
        'gmail-android',
        'apple-mail',
        'apple-ios',
        'yahoo-mail',
        'outlook',
        'outlook-legacy',
        'outlook-web',
      ],
      ...config,
    }
  }

  validate(style, componentName) {
    for (const propNameCamelCase in style) {  // eslint-disable-line guard-for-in
      const propName = propNameCamelCase.replace(capsRe, match => '-' + match[0].toLowerCase())

      const supportInfo = supportMatrix[propName]

      if (!supportInfo) {
        if (this.config.strict) {
          return new Error(`Unknown style property \`${propName}\` supplied to \`${componentName}\`.`)
        }
        return undefined
      }

      const unsupported = []
      const messages = new Map()
      this.config.platforms.forEach(platform => {
        if (typeof supportInfo[platform] === 'string') {
          const msg = supportInfo[platform]
          if (!messages.has(msg)) {
            messages.set(msg, [])
          }
          messages.get(msg).push(platform)
        } else if (supportInfo[platform] === false) {
          unsupported.push(platform)
        }
      })

      for (const [msg, platforms] of messages) {
         console.warn(colors.yellow(`Warning: Style property \`${propName}\` supplied to \`${componentName}\`, in ${platforms.join(', ')}: ${msg.toLowerCase()}`))  // eslint-disable-line no-console
      }

      if (unsupported.length) {
        return new Error(`Style property \`${propName}\` supplied to \`${componentName}\` unsupported in: ${unsupported.join(', ')}.`)
      }
    }
  }
}
