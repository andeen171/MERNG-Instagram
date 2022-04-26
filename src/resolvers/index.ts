import postsResolvers from './Post';
import userResolvers from './User';

export default {
  Query: {
    ...postsResolvers.Query
  },
  Mutation: {
    ...postsResolvers.Mutation,
    ...userResolvers.Mutation
  }
};