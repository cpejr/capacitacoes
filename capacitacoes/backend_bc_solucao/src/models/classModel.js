const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
    required: false,
  },
});

const classSchema = new mongoose.Schema({
  responsible: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  tests: [testSchema],
});

const Class = mongoose.model("Class", classSchema);

class classActions {
  static async createClass(newClass) {
    await Class.create(newClass);
  }

  static async getClasses() {
    const result = await Class.find({});
    return result;
  }

  static async updateClass(id, newClass) {
    await Class.findByIdAndUpdate(id, newClass);
  }

  static async deleteClass(id) {
    await Class.findByIdAndDelete(id);
  }

  static async createTaskByClassId(id, responsible, newTask) {
    console.log(newTask);
    return await Class.findByIdAndUpdate(
      { _id: id, responsible },
      { $push: { tests: newTask } }
    );
  }

  static async getTasksByStudentId(id) {
    const result = await Class.find({ students: id }, { tasks: 1 });
    return result;
  }

  static async getTaksByTaskId(id) {
    const result = await Class.findById({ id }, { tasks: 1 });
    return result;
  }

  static async updateTask(taskId, id, newTask) {
    await Class.findOneAndUpdate({ _id: taskId, responsible: id }, newTask);
  }

  static async deleteTask(taskId, id) {
    return await Class.findOneAndUpdate(
      { responsible: id, "tests._id": taskId },
      { $pull: { "tests" : { _id: taskId } } }
    );
  }

  static async addStudents(classId, id, students) {
    const result = await Class.findOneAndUpdate(
      { _id: classId, responsible: id },
      { $push: { students } }
    );
    return result;
  }

  static async removeStudents(classId, id, students) {
    console.log(id);
    const result = await Class.findOneAndUpdate(
      { _id: classId, responsible: id },
      { $pull: { students: { $in: students } } }
    );
    return result;
  }
}

module.exports = classActions;
