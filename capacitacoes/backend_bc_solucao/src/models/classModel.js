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

const Categ = mongoose.model('Class', classSchema);

class classActions {

}

module.exports = classActions;