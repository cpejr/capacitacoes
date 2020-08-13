const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const classSchema = new mongoose.Schema({
  responsible: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  tests: [testSchema],
});

const Class = mongoose.model('Class', classSchema);

class classActions {

  static async createClass(newClass){
    await Class.create(newClass)
  };

  static async getClasses() {
    const result = await Class.find({});
    return result;
  };

  static async updateClass(id, newClass){
    await Class.findByIdAndUpdate(id, newClass);
  };

  static async deleteClass(id){
    await Class.findByIdAndDelete(id);
  };
}

module.exports = classActions;