describe('injectReactEmailAttributes', () => {
  let DOMProperty
  let injectReactEmailAttributes
  let emailAttributes

  beforeAll(() => {
    jest.resetModules()
    const module = require('../src/injectReactEmailAttributes')
    DOMProperty = module.DOMProperty
    injectReactEmailAttributes = module.default
    emailAttributes = module.emailAttributes
  })

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('injects email properties on first run', () => {
    const spy = jest.spyOn(DOMProperty.injection, 'injectDOMPropertyConfig').mockImplementation()
    injectReactEmailAttributes()
    expect(spy).toHaveBeenCalledWith(emailAttributes)
  })

  it('no-ops on second run', () => {
    const spy = jest.spyOn(DOMProperty.injection, 'injectDOMPropertyConfig').mockImplementation()
    injectReactEmailAttributes()
    expect(spy).not.toHaveBeenCalled()
  })
})
