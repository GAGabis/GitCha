const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { PythonShell } = require('python-shell');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('src/index.html');

  mainWindow.on('closed', () => {
    app.quit();
  });

  // Executa o script Python quando a janela for criada
  runPythonScript(mainWindow);
}

function runPythonScript(mainWindow) {
  let options = {
    scriptPath: path.join(__dirname, 'python_scripts'),
    pythonOptions: ['-u'], // Opção para exibir a saída do Python em tempo real
  };

  // Cria a instância do PythonShell para executar o script Python
  const pyshell = new PythonShell('reconhecimento_faces.py', options);

  // Lida com a saída do Python
  pyshell.on('message', (message) => {
    // Envia a saída do Python para a janela principal do Electron
    mainWindow.webContents.send('python-output', message);
  });

  // Lida com o encerramento do PythonShell
  pyshell.on('close', () => {
    // Encerra a aplicação do Electron quando o script Python terminar
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

// Lida com a recepção da saída do Python na janela principal do Electron
ipcMain.on('python-output', (event, message) => {
  console.log('Saída do Python:', message);

  // Verifica se a mensagem é "Face detected!"
  if (message === 'Face detected!') {
    // Faça algo quando uma face for detectada
    console.log('Face detectada!');
    // Exemplo: exibir uma notificação no Electron
    const { Notification } = require('electron');
    const notification = new Notification({
      title: 'Detecção de Face',
      body: 'Uma face foi detectada!',
    });
    notification.show();
  }
});
  