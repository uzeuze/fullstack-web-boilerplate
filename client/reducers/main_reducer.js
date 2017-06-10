const INITIAL_STATE = {
  test: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return { ...state, test: !state.test };
    default:
      return state;
  }
};
