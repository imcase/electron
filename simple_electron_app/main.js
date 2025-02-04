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

  autoUpdater.checkForUpdatesAndNotify();
});

// Function to show About dialog
function showAbout() {
  dialog.showMessageBox({
    type: "info",
    title: "About",
    message: "Your App Description Here.",
    buttons: ["OK"]
  });
}

// Function to check for updates
function checkForUpdates() {
  autoUpdater.checkForUpdatesAndNotify();
}

autoUpdater.on("update-downloaded", () => {
  dialog.showMessageBox({
    type: "info",
    title: "Update Available",
    message: "A new update is ready. The app will restart to update.",
  }).then(() => {
    autoUpdater.quitAndInstall();
  });
});
