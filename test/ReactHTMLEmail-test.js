import expect, { spyOn } from 'expect'
import ReactHTMLEmail from '../src/index'

let ReactPropTypesSecret
try {
  // introduced in React 15.3.0
  ReactPropTypesSecret = require('react/lib/ReactPropTypesSecret')
} catch (e) { /* ignore missing module failures (older versions of React) */ }

describe('ReactHTMLEmail', () => {
  describe('PropTypes.style', () => {
    it('returns an error for non-objects', () => {
      const style = 1
      const result = ReactHTMLEmail.PropTypes.style({ style }, 'style', '<Test>', null, null, ReactPropTypesSecret)
      expect(result instanceof Error).toBe(true)
      expect(result.message).toBe('Invalid undefined `style` of type `number` supplied to `<Test>`, expected `object`.')
    })

    it('validates style objects', () => {
      const spy = spyOn(ReactHTMLEmail.__styleValidator, 'validate')
      const style = { listStylePosition: '11px' }
      ReactHTMLEmail.PropTypes.style({ style }, 'style', '<Test>', null, null, ReactPropTypesSecret)
      expect(spy).toHaveBeenCalledWith(style, '<Test>')
      spy.restore()
    })
  })

  describe('configStyleValidator', () => {
    it('updates StyleValidator config', () => {
      const spy = spyOn(ReactHTMLEmail.__styleValidator, 'setConfig')
      const config = { strict: false }
      ReactHTMLEmail.configStyleValidator(config)
      expect(spy).toHaveBeenCalledWith(config)
      spy.restore()
    })
  })

  describe('when NODE_ENV=production', () => {
    const modulePath = require.resolve('../src/index')
    let origModule
    let origENV
    before(() => {
      origENV = process.env.NODE_ENV
      origModule = require.cache[modulePath]
      delete require.cache[modulePath]
    })

    it('disables warnings', () => {
      process.env.NODE_ENV = 'production'
      const module = require('../src/index')
      expect(module.default.__styleValidator.config.warn).toEqual(false)
    })

    after(() => {
      process.env.NODE_ENV = origENV
      require.cache[modulePath] = origModule
    })
  })
})
