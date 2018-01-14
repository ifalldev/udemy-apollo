import moongose from 'mongoose';
import uuid from 'node-uuid';

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  // id, age, name, books, birthday
  id: {
    type: String,
    default: uuid.v1
  },
  name: String,
  age: Number,
  books: [String]
});

export default Schema