const User = require('../models/userModel');
const { addStudents, removeStudents } = require('../validators/classValidator');

module.exports = {

    async create(request, response) {
        try {
            const newUser = request.body;
            await User.createUser(newUser);
            return response.status(201).json({ message: "Usuario criado com sucesso!" })
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to create User" });
        }
    },

    async read(request, response) {
        try {
            let result = await User.getUsers();
            return response.status(200).json({ Users: result, message: "Usuarios recebidos com sucesso!" });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to get Users" });
        }
    },

    async update(request, response) {
        try {
            const { id } = request.params;
            const newUser = request.body;

            await User.updateUser(id, newUser);
            return response.json({ message: 'Usuario atualizado com sucesso!' });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to update Users" });
        }
    },

    async delete(request, response) {
        try {
            const { id } = request.params;

            await User.deleteUser(id);
            return response.json({ message: 'Usuario deletado com sucesso!' });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to delete Users" });
        }
    },
}