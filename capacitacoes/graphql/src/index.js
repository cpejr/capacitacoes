import dotenv from "dotenv";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import startServer from "./startServer";

dotenv.config();
startServer({ typeDefs, resolvers });
