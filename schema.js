import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
type Author {
  age: Int
  name: String
  Books: [String]
}
type Query {
  author: [Author]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });

export default schema;