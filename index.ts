const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`;

const resolvers = {
    Query: {
        sayHi: () => 'Hello World'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({port: 8000}).then((res: Response) => {
    console.log(`server running at ${res.url}`)
})
