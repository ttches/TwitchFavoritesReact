import { combineReducers } from 'redux';
import stateReducer from './reducer_streamers';
import statusReducer from './reducer_status';
import inputReducer from './reducer_input'

const rootReducer = combineReducers({
  streamers: stateReducer,
  status: statusReducer,
  input: inputReducer
});

export default rootReducer;
