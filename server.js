const FtpSrv = require('ftp-srv');

const ftpServer = new FtpSrv('ftp://127.0.0.1:21');

ftpServer.on('login', ({connection, username, password}, resolve, reject) => {
    if (username === 'test' && password === 'test') {
        resolve({root: 'C:\\testftp'});
    } else {
        reject(new Error('Invalid username or password'));
    }
});

ftpServer.listen()
    .then(() => {
        console.log('FTP server running');
    })
    .catch((err) => {
        console.error(err);
    });
