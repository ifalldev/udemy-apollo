const authors = [
  {
    name: 'JK Rowling',
    age: 50,
    Books: ['HP & Globet of Fire', 'HP & Prisioner of Azkaban']
  },
  {
    name: 'George RR Martin',
    age: 50,
    Books: ['GOT - Song of Ice & Fire', 'GOT - Dance of Dragons']
  },
];

const resolvers = {
  Query: {
    author: () => {
      return authors;
    }
  }
}

export default resolvers;