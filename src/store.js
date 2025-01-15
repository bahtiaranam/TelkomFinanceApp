import {combineReducers} from 'redux';
import homeReducer from './screens/Home/reducer';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
