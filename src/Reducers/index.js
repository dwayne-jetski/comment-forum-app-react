import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments.js';


export default combineReducers({
    comments: commentsReducer
});
