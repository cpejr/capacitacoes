const PlayerModel = require('../models/PlayerModel');

module.exports = {
  async create(request, response) {
    try {
      const { name, age } = request.body;

      const result = await PlayerModel.create({ name, age });

      return response.status(200).json(result);
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: "Fatal error while trying to create player" })
    }
  },
  async update(request, response) {
    try {
      const { id } = request.params;
      const { name, age } = request.body;

      const result = await PlayerModel.update(id, { name, age });

      return response.status(200).json(result);
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: "Fatal error while trying to create player" })
    }

  },
  async index(request, response) {
    try {
      const result = await PlayerModel.getAll();

      return response.status(200).json(result);
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: "Fatal error while trying to return all players" })
    }

  },
  async getOne(request, response) {
    try {
      const { id } = request.params;

      const result = await PlayerModel.getOne(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: "Fatal error while trying to get one player" })
    }

  },
  async delete(request, response) {
    try {
      const { id } = request.params;

      const result = await PlayerModel.delete(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log(error)
      return response.status(500).json({ message: "Fatal error while trying to delete player" })
    }

  },
}
