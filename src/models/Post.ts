import { model, Schema } from 'mongoose';

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: Date,
  comments: [
    {
      body: String,
      username: String,
      createdAt: Date
    }
  ],
  likes: [
    {
      username: String,
      createdAt: Date
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

export default model('Post', postSchema);
