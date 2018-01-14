import { makeExecutableSchema } from 'graphql-tools';
const typeDefs = `
type Person {
  age: Int
  name: String
  gender: String
}`;

const schema = makeExecutableSchema({ typeDefs });