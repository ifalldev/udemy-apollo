// const authors = [
//   {
//     id: 1,
//     name: 'JK Rowling',
//     age: 50,
//     books: ['HP & Globet of Fire', 'HP & Prisioner of Azkaban']
//   },
//   {
//     id: 2,
//     name: 'George RR Martin',
//     age: 70,
//     books: ['GOT - Song of Ice & Fire', 'GOT - Dance of Dragons']
//   },
//   {
//     id: 3,
//     name: 'Stephen King',
//     age: 60,
//     books: ['Carrie', 'Dark Tower']
//   },
// ];

const resolvers = {
  Query: {
    authors: () => {
      return authors;
    },
    author: (root, { id }) => {
      return authors.find(author => author.id === id);
    }
  }
}

export default resolvers;