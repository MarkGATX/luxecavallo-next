// import express, { urlencoded, json, static } from 'express';
import { ApolloServer } from 'apollo-server-express';
// import { join } from 'path';
import cors from 'cors';



import { typeDefs, resolvers } from './schemas';
import { once } from './config/connection';

const PORT = process.env.PORT || 3001;
// const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: {
    cache: 'bounded', // Add this line to set cache to "bounded"
  },
});

// app.use(urlencoded({ extended: false }));
// app.use(json());

// app.use(cors({
//   origin: '*',
//   methods: 'GET,PUT,POST,DELETE',
//   allowedHeaders: 'Content-Type,Authorization'
// }));

// if (process.env.NODE_ENV === 'production') {
//   app.use(static(join(__dirname, '../client/build')));
// }

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, '../client/build/index.html'));
// });


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers, ) => {
  await server.start();
  server.applyMiddleware({ app });
  
  once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);

