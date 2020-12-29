const { app, BrowserWindow } = require("electron");
const path = require("path");

app.disableHardwareAcceleration();

function createWindow() {
  const win = new BrowserWindow({
    alwaysOnTop: true,
    width: 1366,
    show: true,
    autoHideMenuBar: true,
    height: 767,
    x: 0,
    y: 0,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
  });

  win.loadFile(path.resolve("./public/index.html"));
  win.setMenu(null);
}

app.whenReady().then(() => {
  console.log("ready");
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
