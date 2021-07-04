const dgram = require('dgram');

const server = dgram.createSocket('udp4', (message, info) => {
  console.log(info);
  console.log(message.toString());
});

server.bind(8085, () => {
  const address = server.address();
  console.log(`Server ${address.family} started at ${address.address}:${address.port}`);
});
