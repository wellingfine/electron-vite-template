import { ipcMain, dialog, BrowserWindow, app } from 'electron'
import config from '@config/index'
import { winURL, preloadURL, staticPaths } from '../config/StaticPath'
import { otherWindowConfig } from "../config/windowsConfig"
import { UpdateStatus } from 'electron_updater_node_core'

export default {
  Mainfunc() {

    ipcMain.handle('windows-mini', (event, args) => {
      BrowserWindow.fromWebContents(event.sender)?.minimize()
    })
    ipcMain.handle('window-max', async (event, args) => {
      if (BrowserWindow.fromWebContents(event.sender)?.isMaximized()) {
        BrowserWindow.fromWebContents(event.sender)?.restore()
        return { status: false }
      } else {
        BrowserWindow.fromWebContents(event.sender)?.maximize()
        return { status: true }
      }
    })
    ipcMain.handle('window-close', (event, args) => {
      BrowserWindow.fromWebContents(event.sender)?.close()
    })

    ipcMain.handle('app-close', (event, args) => {
      app.quit()
    })
    ipcMain.handle('get-static-path', (event, args) => {
      return staticPaths
    })
    ipcMain.handle('open-messagebox', async (event, arg) => {
      const res = await dialog.showMessageBox(BrowserWindow.fromWebContents(event.sender), {
        type: arg.type || 'info',
        title: arg.title || '',
        buttons: arg.buttons || [],
        message: arg.message || '',
        noLink: arg.noLink || true
      })
      return res
    })
    ipcMain.handle('open-errorbox', (event, arg) => {
      dialog.showErrorBox(
        arg.title,
        arg.message
      )
    })
  }
}
