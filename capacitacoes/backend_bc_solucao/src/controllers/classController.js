const Class = require('../models/classModel')

module.exports = {

    async create(request, response) {
        try {
            const newClass = request.body;
            await Class.createClass(newClass);
            return response.status(200).json({ message: "Turma criada com sucesso!" })
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to create Class" });
        }
    },

    async read(request, response) {
        try {
            let result = await Class.getClasses();
            return response.status(200).json({ classes: result, message: "Turmas recebidas com sucesso!" });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to get Classes" });
        }
    },

    async update(request, response) {
        try {
            const {id} = request.params;
            const newClass = request.body;

            await Class.updateClass(id, newClass);
            return response.json({ message: 'Usuario atualizado com sucesso!' });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to update Classes" });
        }
    },

    async delete(request, response) {
        try {
            const {id} = request.params;

            await Class.deleteClass(id);
            return response.json({ message: 'Usuario deletado com sucesso!' });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to delete Classes" });
        }
    },
}
