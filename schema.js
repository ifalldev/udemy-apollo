import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
type Author {
  age: Int
  name: String
  books: [String]
}
type Query {
  authors: [Author]
  author(age: Int): Author
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });

export default schema;