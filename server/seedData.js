'use strict';

const {Question, QuestionList} = require('./model.js');
const mongoose = require('mongoose');
const {DATABASE_URL} = require('./secret');


const questionsToAsk = [
  {
    question: 'What command do you use to switch to insert mode?',
    answer: 'i'
  },
  {
    question: 'What command do you use to save a file and quit the editor?',
    answer: ':wq'
  },
  {
    question: 'What command do you use to quit immediately without saving?',
    answer: ':q!'
  },
  {
    question: 'What command do you use to create a file?',
    answer: 'vim'
  },
  {
    question: 'What command do you use to move the cursor on character to the left?',
    answer: 'h'
  },
  {
    question: 'What command do you use to move the cursor one character to the right?',
    answer: 'l'
  },
  {
    question: 'What command do you use to move the cursor up one line?',
    answer: 'k'
  },
  {
    question: 'What command do you use to move the cursor down one line?',
    answer: 'j'
  },
  {
    question: 'What command do you use to move the cursor to a specific line?',
    answer: 'nG'
  }
];

function seedList(data){
  console.log(data);
  return QuestionList.insertMany(data);
}

function tearDownDb() {
  return new Promise((resolve, reject) => {
    console.warn('Deleting database');
    mongoose.connection.dropDatabase()
      .then(result => {
        console.log(result);
        resolve(result);
      })
      .catch(err => reject(err));
  });
}

mongoose.connect(DATABASE_URL, err => {
  if (err) {
    console.error(err);
  }
  tearDownDb().then(response => {
    return Question
      .insertMany(questionsToAsk)
      .then(response => {
        console.log("GHVDSCGHVHGVC",response);
        seedList(response);
      })
  })
    .catch(err => {
      console.error(err);
    });
});
