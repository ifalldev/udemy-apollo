import mongoose from 'mongoose';
import Author from './model/author';

const resolvers = {
  Query: {
    authors: () => {
      // return authors;
      return Author.find({});
    },
    author: (root, { id }) => {
      // return authors.find(author => author.id === id);
      return Author.find({ id });
    }
  },
  Mutation: {
    addAuthor: (root, { name, age, books }) => {
      // save author
      const author = new Author({ age, name, books });
      return author.save();
    },

    deleteAuthor: (root, { id }) => {
      return Author.findOneAndRemove({ id });
    },

    updateAuthor: (root, args) => {
      return Author.findOneAndUpdate({ id: args.id }, args);
    }
  }
}

export default resolvers;