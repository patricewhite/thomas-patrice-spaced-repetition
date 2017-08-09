import * as Cookies from 'js-cookie';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = currentUser => ({
  type: FETCH_USER_SUCCESS,
  currentUser
});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error
});

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const setAccessToken = accessToken => ({
  type: SET_ACCESS_TOKEN,
  accessToken
});

export const REMOVE_ACCESS_TOKEN = 'REMOVE_ACCESS_TOKEN';
export const removeAccessToken = () => ({
  type: REMOVE_ACCESS_TOKEN
});

export const FETCH_QUESTIONS_REQUEST = 'FETCH_QUESTIONS_REQUEST';
export const fetchQuestionsRequest = () => ({
  type: FETCH_QUESTIONS_REQUEST
});

export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = dbQuestions => ({
  type: FETCH_QUESTIONS_SUCCESS,
  dbQuestions
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
  type: FETCH_QUESTIONS_ERROR,
  error
});

export const SET_USER_QUESTIONS = 'SET_USER_QUESTIONS';
export const setUserQuestions = userQuestions => ({
  type: SET_USER_QUESTIONS,
  userQuestions
});

export const SET_CURRENT_QUESTION = 'SET_CURRENT_QUESTION';
export const setCurrentQuestion = currentQuestion => ({
  type: SET_CURRENT_QUESTION,
  currentQuestion
});

export const SET_CURRENT_ANSWER = 'SET_CURRENT_ANSWER';
export const setCurrentAnswer = currentAnswer => ({
  type: SET_CURRENT_ANSWER,
  currentAnswer
});

export const INCREMENT_TOTAL_CORRECT = 'INCREMENT_TOTAL_CORRECT';
export const incrementTotalCorrect = () => ({
  type: INCREMENT_TOTAL_CORRECT
});

export const INCREMENT_TOTAL_ANSWERED = 'INCREMENT_TOTAL_ANSWERED';
export const incrementTotalAnswered = () => ({
  type: INCREMENT_TOTAL_ANSWERED
});

export const fetchUser = accessToken => dispatch => {
  dispatch(fetchUserRequest());
  dispatch(setAccessToken(accessToken));
  fetch('/api/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(res => {
    if (!res.ok) {
      if (res.status === 401) {
        Cookies.remove('accessToken');
        dispatch(removeAccessToken());
        return;
      }
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(currentUser => {
    dispatch(fetchUserSuccess(currentUser));
  }).catch(err => {
    dispatch(fetchUserError(err));
  });
};

export const fetchQuestions = accessToken => dispatch => {
  dispatch(fetchQuestionsRequest());
  fetch('/api/questions', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(dbQuestions => {
    dispatch(fetchQuestionsSuccess(dbQuestions));
  }).catch(err => {
    dispatch(fetchQuestionsError(err));
  });
};

// fetchQuestions() => that just pulls the array of questions off the db.

//Doubly Linked List
class DLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  insert(nthPosition, value) {
    if (nthPosition < 0 || nthPosition > this.length) {
      throw new Error('Index error');
    }
    const newNode = {
      value
    };
    if (nthPosition === 0) {
      newNode.next = this.head;
      newNode.previous = null;
      this.head = newNode;
    }
    else {
      const node = this._findNthElement(nthPosition - 1);
      newNode.next = node.next;
      newNode.previous = node;
      node.next = newNode;
    }

    this.length++;
  }
  _findNthElement(nthElement) {
    let node = this.head;
    for (let i=0; i<nthElement; i++) {
      node = node.next;
    }
    return node;
  }
  get(nthElement) {
    if (nthElement < 0 || nthElement >= this.length) {
      throw new Error('Index error');
    }

    return this._findNthElement(nthElement).value;
  }

  remove(nthElement) {
    var currNode = this._findNthElement(nthElement);
    if (!(currNode.next === null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }
}

function findLast(lst) {
  var currNode = lst.head;
  while (!(currNode.next === null)) {
    currNode = currNode.next;
    // console.log(currNode);
  }
  return currNode;
}

const checkAnswer = (userAnswer, currentQuestion) => {
  if (userAnswer !== currentQuestion.answer){
    return false;
  } else {
    return true;
  }
};

const pullQuestion = dll => dispatch => {
  let question = dll.get(1);
  dispatch(setCurrentQuestion(question));
  dll.remove(1);//1
  return dll;
};
// spacedRep(userAnswer, currentQuestion, questionsList) => Output an updated questions list.
    // if (checkAnswer) dispatch(totalCorrect++, totalAnswered++)
    // do some stuff
    // dispatch(newQuestionsList)

// pullQuestion(questionsList) => sets currentQuestion to be displayed.

export const loadUserQuestions = (initialList, currentDll = null, userAnswer = null, currentQuestion = null) => dispatch => {
  // handling initial load, when questionsList = dbQuestions
  if (userAnswer === null && currentQuestion === null && currentDll === null && initialList) {
    const dll = new DLinkedList();
    for (let i = 0; i < initialList.length; i++) {
      dll.insert(i, initialList[i]);
    }
    pullQuestion(dll);
    dispatch(setUserQuestions(dll));
    //return dll;
  }

  if (currentDll && userAnswer && currentQuestion) {
    if(checkAnswer(userAnswer, currentQuestion) === true){
      dispatch(incrementTotalCorrect());
      dispatch(incrementTotalAnswered());
      currentDll.insert(currentDll.length, currentQuestion);
      pullQuestion(currentDll);
      dispatch(setUserQuestions(currentDll));
    }
    else {
      dispatch(incrementTotalAnswered());
      currentDll.insert(2, currentQuestion);
      pullQuestion(currentDll);
      dispatch(setUserQuestions(currentDll));
    }
  }
};
