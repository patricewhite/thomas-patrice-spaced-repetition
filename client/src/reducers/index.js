import * as actions from '../actions';

const initialState = {
  loading: false,
  error: null,

  dbQuestions: [], // a fixed array of questions from the DB.
  userQuestions: [], // this list of questions to be asked. Out from the spacedRep.
  currentQuestion: {}, // current question displayed. { _id: 234234, question: 'something', answer: 'something'},
  currentAnswer: null,
  totalCorrect: 0,
  totalAnswered: 0,

  currentUser: null,
  accessToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case actions.FETCH_USER_REQUEST:
    return Object.assign({}, state, {
      loading: true,
    });

  case actions.FETCH_USER_SUCCESS:
    return Object.assign({}, state, {
      currentUser: action.currentUser,
      loading: false,
      error: null
    });

  case actions.FETCH_USER_ERROR:
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });

  case actions.SET_ACCESS_TOKEN:
    return Object.assign({}, state, {
      accessToken: action.accessToken
    });

  case actions.REMOVE_ACCESS_TOKEN:
    return Object.assign({}, state, {
      accessToken: null
    });

  default:
    return state;
  }
};

export default reducer;
