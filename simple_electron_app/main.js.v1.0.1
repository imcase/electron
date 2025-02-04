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

  // Create custom menu
  // Create custom menu
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Exit",
          accelerator: "CmdOrCtrl+X", // Exit app with Ctrl+X
          click: () => app.quit(), // Quit the app
        }
      ]
    },
    {
      label: "Edit",
      submenu: [
        {
          label: "Undo",
          accelerator: "CmdOrCtrl+Z",
          role: "undo", // Built-in undo action
        },
        {
          label: "Redo",
          accelerator: "CmdOrCtrl+Y",
          role: "redo", // Built-in redo action
        },
        {
          type: "separator", // Separator between actions
        },
        {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          role: "cut", // Built-in cut action
        },
        {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          role: "copy", // Built-in copy action
        },
        {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          role: "paste", // Built-in paste action
        },
        {
          type: "separator", // Another separator
        },
        {
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          role: "selectall", // Built-in Select All action
        }
      ]
    },
    {
      label: "View",
      submenu: [
        {
          label: "Actual Size",
          accelerator: "CmdOrCtrl+0", // Reset zoom to default size
          click: () => mainWindow.webContents.setZoomLevel(0),
        },
        {
          label: "Zoom In",
          accelerator: "Ctrl+Shift+=", // Zoom in
          click: () => {
            let currentZoom = mainWindow.webContents.getZoomLevel();
            mainWindow.webContents.setZoomLevel(currentZoom + 1);
          },
        },
        {
          label: "Zoom Out",
          accelerator: "Ctrl+-", // Zoom out
          click: () => {
            let currentZoom = mainWindow.webContents.getZoomLevel();
            mainWindow.webContents.setZoomLevel(currentZoom - 1);
          },
        },
        {
          label: "Toggle Fullscreen",
          accelerator: "F11", // Fullscreen toggle
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          },
        },
        {
          type: "separator", // Separator before Maximize/Minimize/Normal
        },
        {
          label: "Maximize",
          accelerator: "CmdOrCtrl+Shift+M", // Maximize with shortcut
          click: () => mainWindow.maximize(), // Maximize the window
        },
        {
          label: "Minimize",
          accelerator: "CmdOrCtrl+Shift+N", // Minimize with shortcut
          click: () => mainWindow.minimize(), // Minimize the window
        },
        {
          label: "Normal Mode", // Restore the window to normal size
          accelerator: "CmdOrCtrl+Shift+R", // Normal mode shortcut
          click: () => {
            if (mainWindow.isMaximized()) {
              mainWindow.restore(); // Restore window to normal size
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
          enabled: false, // Make it non-clickable
        },
        {
          type: "separator",
        },
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

autoUpdater.on("update-available", () => {
  dialog.showMessageBox({
    type: "info",
    title: "Update Available",
    message: "A new update is available. Downloading now...",
  });
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
