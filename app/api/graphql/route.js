import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs, resolvers } from '@/server/schemas';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request) {
  try {
    return handler(request);
  } catch (error) {
    console.error('error in GET request: ', error)
  }
}

export async function POST(request) {
  try {
    return handler(request);
  } catch (error) {
    console.error('error in POST request: ', error)
  }
}

