const connection = require('../database/connection');

module.exports = {
  async create(player) {
    const result = await connection('players').insert(player).returning('id');

    return result;
  },
  async update(id, player) {
    const result = await connection('players').where('id', '=', id).update(player).returning('*');

    return result;
  },
  async getAll() {
    const result = await connection('players').select('*');

    return result;
  },
  async getOne(id) {
    const result = await connection('players').select('*').where('id', '=', id).first();

    return result;
  },
  async delete(id) {
    const result = await connection('players').where('id', '=', id).delete();

    return result;
  },
} 