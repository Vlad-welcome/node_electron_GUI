import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const GUI = path.join(import.meta.dirname, "GUI");
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false,
    },
  });

  win.loadFile(path.join(GUI, "HTML/index.html"));
}

app.whenReady().then(createWindow);

// Закрываем приложение, когда все окна закрыты (кроме macOS)
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

//or PWA app
