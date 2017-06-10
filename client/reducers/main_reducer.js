import {
  TOGGLE_STATUS
} from '../actions/types';

const INITIAL_STATE = {
  status: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_STATUS:
      return { ...state, status: !state.status };
    default:
      return state;
  }
};
