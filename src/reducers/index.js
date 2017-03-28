import { combineReducers } from 'redux';
import stateReducer from './reducer_streamers';
import statusReducer from './reducer_status';

const rootReducer = combineReducers({
  streamers: stateReducer,
  status: statusReducer
});

export default rootReducer;
