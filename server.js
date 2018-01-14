import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import mongoose from 'mongoose';

const server = express();
const MONGO_URI = 'mongodb://fall:q1w2e3@ds255797.mlab.com:55797/fall93-apollo'

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

mongoose.connect(MONGO_URI);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('connected to mLab');
});

connection.once('error', () => {
  console.log('cannot connect to mLab');
});

connection.once('disconnect', () => {
  console.log('desconectado do mLab');
})

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

server.listen(4000, () => {
  console.log('listening on 4000');
});