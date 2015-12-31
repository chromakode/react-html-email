import expect, { spyOn } from 'expect'
import { DOMProperty } from 'react/lib/ReactInjection'

const modulePath = require.resolve('../src/injectReactEmailAttributes')

describe('injectReactEmailAttributes', () => {
  let origModule
  let module
  let injectReactEmailAttributes
  let emailAttributes
  before(() => {
    origModule = require.cache[modulePath]
    delete require.cache[modulePath]
    module = require('../src/injectReactEmailAttributes')
    injectReactEmailAttributes = module.default
    emailAttributes = module.emailAttributes
  })

  it('injects email properties on first run', () => {
    const spy = spyOn(DOMProperty, 'injectDOMPropertyConfig')
    injectReactEmailAttributes()
    expect(spy).toHaveBeenCalledWith(emailAttributes)
    spy.restore()
  })

  it('no-ops on second run', () => {
    const spy = spyOn(DOMProperty, 'injectDOMPropertyConfig')
    injectReactEmailAttributes()
    expect(spy.calls.length).toBe(0)
    spy.restore()
  })

  after(() => {
    require.cache[modulePath] = origModule
  })
})
