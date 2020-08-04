import {LOAD_SHOWS} from './actionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_SHOWS:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
