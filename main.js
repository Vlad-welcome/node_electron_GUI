import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
  const GUI = path.join(import.meta.dirname, "GUI");
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      preload: path.join(GUI, "render_index.js"),
      contextIsolation: true,
    },
  });

  win.loadFile(path.join(GUI, "index.html"));
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
