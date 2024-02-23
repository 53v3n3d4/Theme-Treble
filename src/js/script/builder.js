import { adaptiveData, darkData, lightData } from '../utils/themeData.js'
import { builder } from 'sublime-builder'

const messageFilenames =
`Theme name not valid. Below you can find the names available.
Theme names: adaptive, light or dark.
Names should be followed by option merge or replace.
E.g. sublimeFile('adaptive-replace').`

// Write sublime file
// Themes: Adaptive, Dark, Light
export function sublimeFile (name) {
  switch (name) {
    case 'adaptive-merge':
      builder(
        'merge',
        adaptiveData.mergeFiles,
        adaptiveData.title,
        adaptiveData.author,
        adaptiveData.license,
        adaptiveData.filename
        // null,
        // null,
        // adaptiveData.tabSpace
      )
      break
    case 'adaptive-replace':
      builder(
        'replace',
        adaptiveData.replaceFiles,
        adaptiveData.title,
        adaptiveData.author,
        adaptiveData.license,
        adaptiveData.filename,
        null,
        adaptiveData.rules,
        adaptiveData.tabSpace
      )
      break
    case 'dark-merge':
      builder(
        'merge',
        darkData.mergeFiles,
        darkData.title,
        darkData.author,
        darkData.license,
        darkData.filename
        // null,
        // null,
        // darkData.tabSpace
      )
      break
    case 'dark-replace':
      builder(
        'replace',
        darkData.replaceFiles,
        darkData.title,
        darkData.author,
        darkData.license,
        darkData.filename,
        null,
        darkData.rules,
        darkData.tabSpace
      )
      break
    case 'light-merge':
      builder(
        'merge',
        lightData.mergeFiles,
        lightData.title,
        lightData.author,
        lightData.license,
        lightData.filename
        // null,
        // null,
        // lightData.tabSpace
      )
      break
    case 'light-replace':
      builder(
        'replace',
        lightData.replaceFiles,
        lightData.title,
        lightData.author,
        lightData.license,
        lightData.filename,
        null,
        lightData.rules,
        lightData.tabSpace
      )
      break
    default:
      console.log(`\u001B[91m${messageFilenames}\u001b[0m`)
      return messageFilenames
  }
}
