import express from 'express';
const server = express();

server.listen(4000, () => {
  console.log('listening on 4000');
});