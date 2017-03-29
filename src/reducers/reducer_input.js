import { UPDATE_INPUT } from '../actions/index';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_INPUT:
      return  action.payload;
    default:
      return state;
  }
}
