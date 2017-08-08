const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String, required: true}
});

const questionSchema = mongoose.Schema({
  question:{type: String},
  answer: {type: String}
});

questionSchema.methods.apiRepr = function(){
  return {
    questionsList: this.questionsList
  };
};


const User = mongoose.model('User', userSchema);
const Question = mongoose.model('Question', questionSchema);

module.exports = { User, Question };
