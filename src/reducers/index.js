import { combineReducers } from 'redux';
import stateReducer from './reducer_streamers';
import statusReducer from './reducer_status';
import inputReducer from './reducer_input'
import inputMatches from './reducer_matches'

const rootReducer = combineReducers({
  streamers: stateReducer,
  status: statusReducer,
  input: inputReducer,
  inputMatches: inputMatches
});

export default rootReducer;
