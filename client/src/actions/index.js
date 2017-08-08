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
        if (nthPosition == 0) {
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
        if (!(currNode.next == null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }
}

function findLast(lst) {
    var currNode = lst.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
        console.log(currNode);
    }
    return currNode;
}



const checkAnswer = (userAnswer, currentQuestion) => {
  if(userAnswer !== currentQuestion[0].answer){
    return false;
  }else{
    return true;
  }
};

// spacedRep(userAnswer, currentQuestion, questionsList) => Output an updated questions list.
    // if (checkAnswer) dispatch(totalCorrect++, totalAnswered++)
    // do some stuff
    // dispatch(newQuestionsList)

// pullQuestion(questionsList) => sets currentQuestion to be displayed.

const spacedRep = (userAnswer=null, currentQuestion=null, questionsList) => {
  let dll = new DLinkedList();
  if(userAnswer && currentQuestion === null){
    for(let i = 0; i < questionsList.length; i++){
      dll.insert(i+1, questionsList[i])
    }
  return dll;
  }

  if(checkAnswer(userAnswer, currentQuestion) === false){
    dispatch(totalCorrect++, totalAnswered++);
    dll.insert(2, currentQuestion);
  }

  if(checkAnswer(userAnswer, currentQuestion) === true){
    dispatch(totalAnswered++);
    dll.insert(dll.length, currentQuestion);
  }
  dispatch(dll);
};

const pullQuestion = (dll){
  let question = dll.get(1);
  dispatch(question);
  dll.remove(question);//1
}
