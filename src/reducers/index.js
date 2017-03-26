import { combineReducers } from 'redux';
import stateReducer from './reducer_streamers';

const rootReducer = combineReducers({
  streamers: stateReducer
});

export default rootReducer;
