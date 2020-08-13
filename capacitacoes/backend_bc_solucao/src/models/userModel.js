const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ["teacher", "student"],
    required: true
  },
});

const User = mongoose.model('User', userSchema);

class userActions {

  static async createUser(newUser){
    await User.create(newUser)
  };

  static async getUsers() {
    const result = await User.find({});
    return result;
  };

  static async updateUser(id, newUser){
    await User.findByIdAndUpdate(id, newUser);
  };

  static async deleteUser(id){
    await User.findByIdAndDelete(id);
  };
}

module.exports = userActions;