import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    body: String,
    username: String,
    created_at: Date,
    comments: [
        {
            body: String,
            username: String,
            created_at: Date
        }
    ],
    likes: [
        {
            username: String,
            created_at: Date
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
})

export default mongoose.model('Post', postSchema);