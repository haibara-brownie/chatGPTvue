// 这里是用于控制应用程序生命周期和创建本机浏览器窗口的模块
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // 创建一个浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // 加载默认界面
  mainWindow.loadFile('index.html')

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

