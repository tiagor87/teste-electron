"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var electron_1 = require("electron");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    // and load the index.html of the app.
    // win.loadURL(`file://${__dirname}/index.html`);
    win.loadURL("http://localhost:3000/");
    // Open the DevTools.
    win.webContents.openDevTools();
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', function () {
    server_1.server.listen(3000);
    createWindow();
});
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
