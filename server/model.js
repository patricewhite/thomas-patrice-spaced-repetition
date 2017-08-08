const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String, required: true}
});

const questionSchema = mongoose.Schema({
  question: {type: String, required: true},
  answer: {type: String, required: true}
});

const listSchema = mongoose.Schema({
  questionsList: [ questionSchema ]
});

// questionSchema.methods.apiRepr = function(){
//   return {
//     questionsList: this.questionsList
//   };
// };


const User = mongoose.model('User', userSchema);
const QuestionList = mongoose.model('QuestionList', listSchema);
const Question = mongoose.model('Question', questionSchema);

module.exports = { User, QuestionList, Question };
