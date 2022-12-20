import { sublimeFile } from './builder.js'

jest.mock('./builder.js', () => ({
  sublimeFile: jest.fn()
}))

const themeTest = {
  variables: {},
  rules:
    [
      {
        class: 'title_bar',
        bg: '#232323',
        style: 'system'
      }
    ]
}

const messageError =
`Theme name not valid. Below you can find the names available.
Theme names: adaptive, light or dark.
Names should be followed by option merge or replace.
E.g. sublimeFile('adaptive-replace').`

describe('sublimeFile options test', () => {
  test('defines a function', () => {
    expect(typeof sublimeFile).toBe('function')
  })

  test.each`
    a                     | expected
    ${'adaptive-replace'} | ${themeTest}
    ${'dark-replace'}     | ${themeTest}
    ${'light-replace'}    | ${themeTest}
    ${'wrong'}            | ${messageError}
  `('returns mock data for name = $a', ({ a, expected }) => {
    sublimeFile.mockImplementation((name) => name === a).mockReturnValue(expected)
    expect(typeof a).toEqual('string')
    sublimeFile.mockClear()
  })
})
