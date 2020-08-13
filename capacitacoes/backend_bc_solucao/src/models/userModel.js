const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

const Categ = mongoose.model('User', userSchema);

class userActions {

}

module.exports = userActions;