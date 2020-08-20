const Class = require('../models/classModel')
const GoogleDrive = require('../models/googleDriveModel')

module.exports = {

    async create(request, response) {
        try {
            const newTask = request.body;
            const { id } = request.session;
            const { originalname, buffer, mimetype } = request.file

            const imageId = await GoogleDrive.uploadImage(originalname, buffer, mimetype);

            newTask.imageId = imageId;

            await Class.createTaskByTeacherId(id, newTask);
            return response.status(201).json({ message: "Tarefa criada com sucesso!" })
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to create Task" });
        }
    },

    async read(request, response) {
        try {
            const { id } = request.session;

            let result = await Class.getTasksByStudentId(id);
            return response.status(200).json({ classes: result, message: "Tarefas recebidas com sucesso!" });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to get Tasks" });
        }
    },

    async update(request, response) {
        try {
            const { taskId } = request.params;
            const { id } = request.session;
            const newTask = request.body;

            if (request.file) {
                const { originalname, buffer, mimetype } = request.file;

                const imageId = await uploadFile(buffer, originalname, mimetype);

                newTask.imageId = imageId;

                const prevTask = await Class.getTaskByTaskId(taskId);

                await deleteFile(prevTask.imageId);
            }

            await Class.updateTask(taskId, id, newTask);
            return response.json({ message: 'Tarefa atualizada com sucesso!' });

        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to update Task" });
        }
    },

    async delete(request, response) {
        try {
            const { taskId } = request.params;
            const { id } = request.session;

            const prevTask = await Class.getTaskByTaskId(taskId);
            await deleteFile(prevTask.imageId);

            await Class.deleteTask(taskId, id);
            return response.json({ message: 'Tarefa deletada com sucesso!' });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ error: "Internal server error while trying to delete Task" });
        }
    },
}
