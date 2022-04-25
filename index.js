import { ApolloServer } from 'apollo-server';
import gql from 'graphql-tag';
import mongoose from 'mongoose';

import { MONGODB } from './config.js';
import PostModel from './models/Post.js';
import UserModel from './models/User.js';

const typeDefs = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
    }
    type Query{
        sayHi: String!
        getPosts: [Post]
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello World',
        getPosts: async () => {
            const posts = await PostModel.find();
            return posts;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const config = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose
    .connect(MONGODB, config)
    .then(() => server.listen({port: 8000}))
    .then((res) => {
    console.log(`server running at ${res.url}`)
})
