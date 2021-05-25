const net = require('net');

const server = net.createServer((connection) => {
  console.log('Cliente conectado');

  server.getConnections((error, count) => {
    console.log(count);
  });

  connection.on('end', () => {
    console.log('Cliente desconectado');

    server.getConnections((error, count) => {
      console.log(count);
    });
  });

  connection.on('close', () => {
    console.log('Cliente desconectado');

    server.getConnections((error, count) => {
      console.log(count);
    });
  });

  connection.write('Mensagem do servidor!\r\n');
  connection.pipe(connection);
});

server.listen(8080, () => {
  console.log('🐧 Servidor escutando na porta 8080');
});
