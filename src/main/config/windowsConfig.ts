import { BrowserWindowConstructorOptions } from 'electron';


export const mainWindowConfig: BrowserWindowConstructorOptions = {
  height: 800,
  useContentSize: true,
  width: 1700,
  minWidth: 500,
  show: false,
  webPreferences: {
    contextIsolation: false,
    nodeIntegration: true,
    webSecurity: false,
    // 如果是开发模式可以使用devTools
    devTools: process.env.NODE_ENV === 'development',
    // 在macos中启用橡皮动画
    scrollBounce: process.platform === 'darwin',
  }
}
