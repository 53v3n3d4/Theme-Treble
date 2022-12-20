import { sublimeFile } from './builder.js'
import { themeWatch } from '../utils/themeData.js'
import { watchDir } from 'sublime-builder'

watchDir(themeWatch.folderPath, themeWatch.folder, themeWatch.themes, sublimeFile)
