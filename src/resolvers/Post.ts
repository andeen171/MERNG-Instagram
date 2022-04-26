import Post from '../models/Post';

export default {
  Query: {
    getPosts: async () => {
      const posts = await Post.find();
      return posts;
    },
    getPost: async (_, { postId }: any) => {
      try {
        const post = await Post.findById(postId);
        if (post) {
          return post;
        } else {
          throw new Error('Post not found');
        }
      } catch (err) {
        throw new Error(err as string);
      }
    }
  },
  Mutation: {
    createPost: async (_, { body }: any) => {
      const newPost = new Post({
        body,
        createdAt: new Date().toISOString()
      });

      const post = await newPost.save();

      return post;
    },
    deletePost: async (_, { postId }: any) => {
      try {
        const post = await Post.findById(postId);
        await post.delete();
        return 'Post deleted successfully';
      } catch (err) {
        throw new Error(err as string);
      }
    }
  }
};
