import mongoose from 'mongoose';
import Author from './model/author';

const resolvers = {
  Query: {
    authors: () => {
      // return authors;
    },
    author: (root, { id }) => {
      // return authors.find(author => author.id === id);
    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      // save author
      const author = new Author({ age, name, books });
      return author.save();
    }
  }
}

export default resolvers;