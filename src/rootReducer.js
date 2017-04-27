import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer.js';

const rootReducer = combineReducers({
  home: HomeReducer,
});

export default rootReducer;
