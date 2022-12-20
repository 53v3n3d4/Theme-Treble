import { pathFile, projectDir, themeDir, themePath } from './dirPaths.js'

// Sublime theme files.
const adaptiveTheme = pathFile('Treble Adaptive.sublime-theme', projectDir)
const darkTheme = pathFile('Treble Dark.sublime-theme', projectDir)
const lightTheme = pathFile('Treble Light.sublime-theme', projectDir)

// Filenames.
const adaptiveRules = 'adaptive-rules.hidden-theme'
const adaptiveVars = 'adaptive-vars.hidden-theme'
const colorsTheme = 'colors-palette.hidden-theme'
const darkRules = 'dark-rules.hidden-theme'
const darkVars = 'dark-vars.hidden-theme'
const lightRules = 'light-rules.hidden-theme'
const lightVars = 'light-vars.hidden-theme'

// Used by Watch.
export const themeWatch = {
  folderPath: themePath,
  folder: 'theme',
  themes: [
    {
      name: 'adaptive-merge',
      filenames: [adaptiveRules, adaptiveVars, colorsTheme]
    },
    {
      name: 'dark-merge',
      filenames: [darkRules, darkVars, colorsTheme]
    },
    {
      name: 'light-merge',
      filenames: [lightRules, lightVars, colorsTheme]
    }
  ]
}

// Theme data
// Merge files order: 1. colors, 2. vars, 3. rules
// Replace files order: 1. vars, 2. colors.
export const adaptiveData = {
  name: 'adaptive',
  filename: adaptiveTheme,
  title: 'Treble Adaptive.sublime-theme - Treble Adaptive',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(adaptiveRules, themeDir),
  mergeFiles: [
    pathFile(colorsTheme, themeDir),
    pathFile(adaptiveVars, themeDir),
    pathFile(adaptiveRules, themeDir)
  ],
  replaceFiles: [
    pathFile(adaptiveVars, themeDir),
    pathFile(colorsTheme, themeDir)
  ]
}

export const darkData = {
  name: 'dark',
  filename: darkTheme,
  title: 'Treble Dark.sublime-theme - Treble Dark',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(darkRules, themeDir),
  mergeFiles: [
    pathFile(colorsTheme, themeDir),
    pathFile(darkVars, themeDir),
    pathFile(darkRules, themeDir)
  ],
  replaceFiles: [
    pathFile(darkVars, themeDir),
    pathFile(colorsTheme, themeDir)
  ]
}

export const lightData = {
  name: 'light',
  filename: lightTheme,
  title: 'Treble Light.sublime-theme - Treble Light',
  author: 'Seven Eda',
  license: 'MIT license',
  rules: pathFile(lightRules, themeDir),
  mergeFiles: [
    pathFile(colorsTheme, themeDir),
    pathFile(lightVars, themeDir),
    pathFile(lightRules, themeDir)
  ],
  replaceFiles: [
    pathFile(lightVars, themeDir),
    pathFile(colorsTheme, themeDir)
  ]
}
