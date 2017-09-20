describe('injectReactEmailAttributes', () => {
  let DOMProperty
  let injectReactEmailAttributes
  let emailAttributes

  beforeAll(() => {
    jest.resetModules()
    const module = require('../src/injectReactEmailAttributes')
    DOMProperty = module._DOMProperty
    injectReactEmailAttributes = module.default
    emailAttributes = module.emailAttributes
  })

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('injects email properties on first run', () => {
    const spy = spyOn(DOMProperty.injection, 'injectDOMPropertyConfig')
    injectReactEmailAttributes()
    expect(spy).toHaveBeenCalledWith(emailAttributes)
  })

  it('no-ops on second run', () => {
    const spy = spyOn(DOMProperty.injection, 'injectDOMPropertyConfig')
    injectReactEmailAttributes()
    expect(spy).not.toHaveBeenCalled()
  })
})
