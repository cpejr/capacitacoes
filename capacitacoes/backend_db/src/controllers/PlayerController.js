const PlayerModel = require('../models/PlayerModel');

module.exports = {
  async create(request, response) {
    const { name, age } = request.body;

    const result = await PlayerModel.create({ name, age });

    return response.status(200).json(result);
  },
  async update(request, response) {
    const { id } = request.params;
    const { name, age } = request.body;

    const result = await PlayerModel.update(id, { name, age });

    return response.status(200).json(result);
  },
  async index(request, response) {
    const result = await PlayerModel.getAll();

    return response.status(200).json(result);
  },
  async getOne(request, response) {
    const { id } = request.params;

    const result = await PlayerModel.getOne(id);

    return response.status(200).json(result);
  },
  async delete(request, response) {
    const { id } = request.params;

    const result = await PlayerModel.delete(id);

    return response.status(200).json(result);
  },
}
