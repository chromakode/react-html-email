import StyleValidator from '../src/StyleValidator'

describe('StyleValidator', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  it('returns an error when strict and an unknown style prop is used', () => {
    const val = new StyleValidator()
    const result = val.validate({ transform: 'scale(2)' }, '<Test>')
    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('Unknown style property `transform` supplied to `<Test>`.')
  })

  it('does not return an error when not strict and an unknown style prop is used', () => {
    const val = new StyleValidator({ strict: false })
    const result = val.validate({ transform: 'scale(2)' }, '<Test>')
    expect(result).toBe(undefined)
  })

  it('returns an error when an unsupported style prop is used', () => {
    const val = new StyleValidator()
    const result = val.validate({ listStylePosition: 'inside' }, '<Test>')
    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('Style property `list-style-position` supplied to `<Test>` unsupported in: outlook, outlook-web.')
  })

  it('does not return an error when not strict and an unsupported style prop is used', () => {
    const val = new StyleValidator({ strict: false })
    const result = val.validate({ listStylePosition: 'inside' }, '<Test>')
    expect(result).toBe(undefined)
  })

  it('does not return an error when no platforms specified', () => {
    const val = new StyleValidator({ platforms: [] })
    const result = val.validate({ listStylePosition: 'inside' }, '<Test>')
    expect(result).toBe(undefined)
  })

  it('does not return an error on a known property, but warns with comments', () => {
    const val = new StyleValidator({ platforms: ['gmail-android', 'yahoo-mail'] })
    const spy = jest.spyOn(console, 'warn').mockImplementation()
    const result = val.validate({ backgroundSize: '11px' }, '<Test>')
    expect(spy).toHaveBeenCalledWith('Warning: Style property `background-size` supplied to `<Test>`, in gmail-android, yahoo-mail: image not stretched')
    expect(result).toBe(undefined)
  })

  it('does not output warnings when they are disabled', () => {
    const val = new StyleValidator({ warn: false, platforms: ['gmail-android', 'yahoo-mail'] })
    const spy = jest.spyOn(console, 'warn').mockImplementation()
    const result = val.validate({ backgroundSize: '11px' }, '<Test>')
    expect(spy).not.toHaveBeenCalled()
    expect(result).toBe(undefined)
  })

  it('treats hyphenated-lowercase property names the same as camelCase', () => {
    const val = new StyleValidator()
    const result = val.validate({ listStylePosition: 'inside' }, '<Test>')
    const result2 = val.validate({ listStylePosition: 'inside' }, '<Test>')
    expect(result instanceof Error).toBe(true)
    expect(result2 instanceof Error).toBe(true)
    expect(result.message).toBe(result2.message)
  })

  it('changes requirements after setConfig called', () => {
    const val = new StyleValidator()
    const result = val.validate({ listStylePosition: 'inside' }, '<Test>')
    expect(result instanceof Error).toBe(true)
    expect(result.message).toBe('Style property `list-style-position` supplied to `<Test>` unsupported in: outlook, outlook-web.')
    val.setConfig({ platforms: ['gmail'] })
    const result2 = val.validate({ listStylePosition: 'inside' }, '<Test>')
    expect(result2).toBe(undefined)
  })
})
