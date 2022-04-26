import { gql } from 'apollo-server';
export default gql`
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }
`;
