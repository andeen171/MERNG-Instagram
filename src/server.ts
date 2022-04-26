import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { URI } from './config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(URI, {})
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: 5000 });
  })
  .then(({ url }: any) => {
    console.log(`Server running at ${url}`);
  });