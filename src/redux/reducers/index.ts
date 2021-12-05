import {combineReducers} from 'redux';
import user from './user';
import tutor from './tutor';

const rootReducer = combineReducers({
  user,
  tutor,
});

export default rootReducer;
