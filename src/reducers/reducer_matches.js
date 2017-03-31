import { INPUT_MATCHES_STREAMER } from '../actions/index';

const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INPUT_MATCHES_STREAMER:
      return  action.payload;
    default:
      return state;
  }
}
