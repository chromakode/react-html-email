describe('ReactHTMLEmail', () => {
  let module
  let checkPropTypes

  beforeEach(() => {
    jest.restoreAllMocks()
    jest.resetModules()
    module = require('../src/index')
    checkPropTypes = require('prop-types').checkPropTypes
  })

  describe('PropTypes.style', () => {
    it('returns an error for non-objects', () => {
      const spy = spyOn(console, 'error')
      const style = 1
      checkPropTypes(module.PropTypes, { style }, 'style', 'Test')
      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith('Warning: Failed style type: Invalid style `style` of type `number` supplied to `Test`, expected `object`.')
    })

    it('validates style objects', () => {
      const spy = spyOn(module.default.__styleValidator, 'validate')
      const style = { listStylePosition: '11px' }
      checkPropTypes(module.PropTypes, { style }, 'style', 'Test')
      expect(spy).toHaveBeenCalledWith(style, 'Test')
    })
  })

  describe('configStyleValidator', () => {
    beforeEach(() => {
      const module = require('../src/index')
    })

    it('updates StyleValidator config', () => {
      const spy = spyOn(module.default.__styleValidator, 'setConfig')
      const config = { strict: false }
      module.configStyleValidator(config)
      expect(spy).toHaveBeenCalledWith(config)
    })
  })

  describe('when NODE_ENV=production', () => {
    let origENV

    beforeAll(() => {
      origENV = process.env.NODE_ENV
      process.env.NODE_ENV = 'production'
    })

    it('disables warnings', () => {
      expect(module.default.__styleValidator.config.warn).toEqual(false)
    })

    afterAll(() => {
      process.env.NODE_ENV = origENV
    })
  })
})
