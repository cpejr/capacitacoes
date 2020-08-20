const Class = require("../models/classModel");
const { uploadFile, deleteFile } = require("../models/googleDriveModel");

module.exports = {
  async create(request, response) {
    try {
      const newTask = request.body;
      const { classId } = request.params;
      const { _id } = request.session.user;
      const { originalname, buffer, mimetype } = request.file;

      // const imageId = await uploadFile(buffer, originalname, mimetype);
      console.log("b");

      newTask.imageId = "undefined";

      const data = await Class.createTaskByClassId(classId, _id, newTask);
      console.log(data);
      return response
        .status(201)
        .json({ message: "Tarefa criada com sucesso!" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Internal server error while trying to create Task" });
    }
  },

  async read(request, response) {
    try {
      const { _id } = request.session.user;

      let result = await Class.getTasksByStudentId(id);
      return response
        .status(200)
        .json({ classes: result, message: "Tarefas recebidas com sucesso!" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Internal server error while trying to get Tasks" });
    }
  },

  async update(request, response) {
    try {
      const { taskId } = request.params;
      const { _id } = request.session.user;
      const newTask = request.body;

      if (request.file) {
        const { originalname, buffer, mimetype } = request.file;

        const imageId = await uploadFile(buffer, originalname, mimetype);

        newTask.imageId = imageId;

        const prevTask = await Class.getTaskByTaskId(taskId);

        await deleteFile(prevTask.imageId);
      }

      await Class.updateTask(taskId, id, newTask);
      return response.json({ message: "Tarefa atualizada com sucesso!" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Internal server error while trying to update Task" });
    }
  },

  async delete(request, response) {
    try {
      const { taskId } = request.params;
      const { _id } = request.session.user;

      const prevTask = await Class.deleteTask(taskId);
      
    //  await deleteFile(prevTask.imageId);

      await Class.deleteTask(taskId, _id);
      return response.json({ message: "Tarefa deletada com sucesso!" });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ error: "Internal server error while trying to delete Task" });
    }
  },
};
