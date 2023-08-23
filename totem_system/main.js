const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { PythonShell } = require('python-shell');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('src/index.html');

  mainWindow.on('closed', () => {
    app.quit();
  });

  runPythonScript(mainWindow);
}

function runPythonScript(mainWindow) {
  let options = {
    scriptPath: path.join(__dirname, 'python_scripts'),
    pythonOptions: ['-u'], 
  };

  const pyshell = new PythonShell('faceRecognition.py', options);

  pyshell.on('message', (message) => {
    mainWindow.webContents.send('python-output', message);
  });

  pyshell.on('close', () => {
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

