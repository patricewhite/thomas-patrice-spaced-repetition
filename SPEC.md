# User Stories

** MVP Stories
* As a user, I should be able to login with Google and access my dashboard (of questions).
* As a user, I should be able to see a question and input a text answer.
* As a user, I should be able to see if I got a question right or wrong and see the right answer before moving on to the next question.
* As a user, I should be able to log out.
* As a user, I should at least be able to see how many in a row I have answered correctly or incorrectly.

** Bonus Points/ Extras
* As a user, I should be able to select categories from which the questions will be drawn.
* As a user, I should be able see a dashboard of my previous sessions and start a new session.
* As a user, I should be able to select the number of questions in a session. Maybe.


## Wire Frames

![Login Screen](https://wireframe.cc/PAFKuo) <br/>
![Questions Page](https://wireframe.cc/jLggtc) <br/>

## Data Flow for Spaced Rep Algorithm

* Algorithm lives on the front end.
* Questions are in a fixed array in the DB. => Done.
* Easy version of session state:
```js
sessionState = {
  sessionDate: Date,
  questionsCorrect: Number,
  totalQuestions: Number,
}
```
* More advanced version:
```js
sessionState = {
  sessionDate: Date,
  answeredQuestions: [
    {
      questionID: mongoID,
      correct: true
    }
  ]
}
```
