const { v4: uuidv4 } = require("uuid");
const connection = require("../../../database/connection");
import { UserInputError } from "apollo-server-errors";

export default {
  Query: {
    users: (_, params) => connection("user").select("*").where(params),
    user: (_, { user_id }) =>
      connection("user").select("*").where({ user_id }).first(),
  },

  Mutation: {
    createUser: async (_, { data }) => {
      const user_id = uuidv4();
      data.user_id = user_id;
      delete data.password;
      await connection("user").insert(data);
      return data;
    },
    deleteUser: async (_, { user_id }) => {
      const user = await connection("user")
        .select("*")
        .where({ user_id })
        .first();
      if (!user) throw new UserInputError("Usuário não encontrado");
      await connection("user").select("*").where({ user_id }).delete();
      return user;
    },
    updateUser: async (_, { user_id, data }) => {
      await connection("user").select("*").where({ user_id }).update(data);
      const user = await connection("user")
        .select("*")
        .where({ user_id })
        .first();
      if (!user) throw new UserInputError("Usuário não encontrado");
      return user;
    },
  },
};
