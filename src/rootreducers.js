import { combineReducers } from 'redux';

import posts from './modules/PostList/reducer';
// import register from './components/Register/reducer';
// import login from './components/Login/reducer';

export default combineReducers({
  posts
});