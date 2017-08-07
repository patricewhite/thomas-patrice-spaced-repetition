const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  googleId: {type: String, required: true},
  accessToken: {type: String, required: true}
});

// const questionSchema = mongoose.Schema({
//   questionsList: [
//     {
//       question: 'open file',
//       answer: ':o file'
//     }
//   ],
// });

const User = mongoose.model('User', userSchema);

module.exports = { User };
