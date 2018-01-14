const authors = [
  {
    name: 'JK Rowling',
    age: 50,
    books: ['HP & Globet of Fire', 'HP & Prisioner of Azkaban']
  },
  {
    name: 'George RR Martin',
    age: 70,
    books: ['GOT - Song of Ice & Fire', 'GOT - Dance of Dragons']
  },
  {
    name: 'Stephen King',
    age: 60,
    books: ['Carrie', 'Dark Tower']
  },
];

const resolvers = {
  Query: {
    authors: () => {
      return authors;
    },
    author: (root, args) => {
      const { age } = args;
      
      return authors.find(author => author.age === age);
    }
  }
}

export default resolvers;