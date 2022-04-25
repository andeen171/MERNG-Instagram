import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    created_at: Date,
    updated_at: Date
})

export default mongoose.model('User', userSchema);