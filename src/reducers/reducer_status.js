import { SORT_STREAMERS_STATUS } from '../actions/index';

const INITIAL_STATE = {online: [], offline: []};

export default function(state = INITIAL_STATE, action) {
  let { payload } = action;
  switch(action.type) {
    case SORT_STREAMERS_STATUS:
      return { online: payload[0], offline: payload[1] };
    default:
      return state;
  }
}
