const { app, BrowserWindow } = require('electron')

function createWindow () {
  // ������ â�� �����մϴ�.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // ������ ������ ���ϴ�.
//   win.webContents.openDevTools()
}

// �� �޼ҵ�� Electron�� �ʱ�ȭ�� �Ϸ�ǰ�
// ������ �����찡 ������ �غ� �Ǿ����� ȣ��ȴ�.
// � API�� �� �̺�Ʈ�� ��Ÿ�� ���Ŀ��� ����� �� �ֽ��ϴ�.
app.whenReady().then(createWindow)

// ��� �����찡 ������ ����ȴ�.
app.on('window-all-closed', () => {
  // macOS������ ����ڰ� ��Ȯ�ϰ� Cmd + Q�� ������ ��������
  // ���ø����̼��̳� �޴� �ٰ� Ȱ��ȭ�� ���·� �ӹ��� �ִ� ���� �Ϲ����Դϴ�.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOS������ dock �������� Ŭ���ǰ� �ٸ� �����찡 �������� �ʾҴٸ�
  // �ۿ��� ���ο� â�� �ٽ� ���� ���� �Ϲ����Դϴ�.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})