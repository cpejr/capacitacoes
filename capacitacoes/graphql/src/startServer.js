// import auth from "./auth";

import { PubSub, ApolloServer } from "apollo-server";

const pubsub = new PubSub();

export default async function startServer({ typeDefs, resolvers }) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
      pubsub,
      // auth: auth(req),
    }),
  });

  server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => console.log(`✅ Server started at ${url}`));
}
