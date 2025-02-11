const { app, BrowserWindow, Menu, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });

  mainWindow.loadURL("https://app.appblocks.io"); // Replace with your own HTML or website

  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Exit",
          accelerator: "CmdOrCtrl+X",
          click: () => app.quit(),
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Undo",
          accelerator: "CmdOrCtrl+Z",
          role: "undo",
        },
        {
          label: "Redo",
          accelerator: "CmdOrCtrl+Y",
          role: "redo",
        },
        { type: "separator" },
        {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          role: "cut",
        },
        {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          role: "copy",
        },
        {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          role: "paste",
        },
        { type: "separator" },
        {
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          role: "selectall",
        }
      ]
    },
    {
      label: "View",
      submenu: [
        {
          label: "Actual Size",
          accelerator: "CmdOrCtrl+0",
          click: () => mainWindow.webContents.setZoomLevel(0),
        },
        {
          label: "Zoom In",
          accelerator: "Ctrl+Shift+=",
          click: () => {
            let currentZoom = mainWindow.webContents.getZoomLevel();
            mainWindow.webContents.setZoomLevel(currentZoom + 1);
          },
        },
        {
          label: "Zoom Out",
          accelerator: "Ctrl+-",
          click: () => {
            let currentZoom = mainWindow.webContents.getZoomLevel();
            mainWindow.webContents.setZoomLevel(currentZoom - 1);
          },
        },
        {
          label: "Toggle Fullscreen",
          accelerator: "F11",
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          },
        },
        { type: "separator" },
        {
          label: "Maximize",
          accelerator: "CmdOrCtrl+Shift+M",
          click: () => mainWindow.maximize(),
        },
        {
          label: "Minimize",
          accelerator: "CmdOrCtrl+Shift+N",
          click: () => mainWindow.minimize(),
        },
        {
          label: "Normal Mode",
          accelerator: "CmdOrCtrl+Shift+R",
          click: () => {
            if (mainWindow.isMaximized()) {
              mainWindow.restore();
            }
          },
        },
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: "About",
          click: () => showAbout(),
        },
        {
          label: "Check for Updates",
          click: () => checkForUpdates(),
        },
        {
          label: `Version ${app.getVersion()}`,
          enabled: false,
        },
        { type: "separator" },
        {
          label: "Quit",
          role: "quit",
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // Start checking for updates
  autoUpdater.checkForUpdatesAndNotify();
});

// Function to show About dialog
function showAbout() {
  dialog.showMessageBox({
    type: "info",
    title: "About",
    message: `Simple Electron App\nVersion: ${app.getVersion()}`,
    buttons: ["OK"],
  });
}

// Function to check for updates
function checkForUpdates() {
  autoUpdater.checkForUpdatesAndNotify();
}

// Handle update events
autoUpdater.on("update-available", () => {
  dialog.showMessageBox({
    type: "info",
    title: "Update Available",
    message: "A new update is available. Downloading now...",
  });
});

// Show a progress bar during download
autoUpdater.on("download-progress", (progressObj) => {
  mainWindow.setTitle(`Downloading update... ${Math.round(progressObj.percent)}%`);
});

autoUpdater.on("update-not-available", () => {
  dialog.showMessageBox({
    type: "info",
    title: "No Updates",
    message: "You are using the latest version.",
  });
});

autoUpdater.on("update-downloaded", () => {
  dialog
    .showMessageBox({
      type: "info",
      title: "Update Ready",
      message: "A new update is ready. The app will restart to update.",
    })
    .then(() => {
      autoUpdater.quitAndInstall();
    });
});

autoUpdater.on("error", (err) => {
  dialog.showMessageBox({
    type: "error",
    title: "Update Error",
    message: `Error checking for updates: ${err.message}`,
  });
});
