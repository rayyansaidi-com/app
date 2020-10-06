const { app, BrowserWindow, shell } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = process.platform === 'darwin'
    ? new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        worldSafeExecuteJavaScript: true,
        enableRemoteModule: false,
      },
      minHeight: 400,
      minWidth: 700,
      frame: false,
      titleBarStyle: 'hiddenInset'
    })
    : new BrowserWindow({
      width: 1000,
      height: 800,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        worldSafeExecuteJavaScript: true,
        enableRemoteModule: false,
      },
      minHeight: 400,
      minWidth: 700
    })

  // and load the index.html of the app.
  process.env.NODE_ENV === 'development' ? win.loadURL('http://localhost:3000') : win.loadFile('build/index.html')

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', async (event, navigationUrl) => {
    event.preventDefault()
    await shell.openExternal(navigationUrl)
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
