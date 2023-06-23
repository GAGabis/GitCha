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

  mainWindow.loadFile('src/starting.html');

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

  const pyshell = new PythonShell('reconhecimento_faces.py', options);

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

ipcMain.on('python-output', (event, message) => {
  console.log('Saída do Python:', message);
  if (message === 'Face detected!') {
    console.log('Face detectada!');
    const { Notification } = require('electron');
    const notification = new Notification({
      title: 'Detecção de Face',
      body: 'Uma face foi detectada!',
    });
    notification.show();
  }
});
  