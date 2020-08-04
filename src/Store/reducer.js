import {
  LOAD_SHOWS_SUCESS,
  LOAD_SHOWS_ERROR,
  LOAD_SHOW_DETAIL_SUCCESS,
  LOAD_SHOW_DETAIL_ERROR,
  CLEAN_SHOW_DATA,
  LOADING_SHOWS,
  LOADING_SHOW_DATA,
} from './actionTypes';

const initialState = {
  show: {
    error: false,
    loading: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SHOW_DETAIL_SUCCESS:
      return {
        ...state,
        show: {
          error: false,
          loading: false,
          ...action.show,
        },
      };

    case LOAD_SHOW_DETAIL_ERROR:
      return {
        ...state,
        show: {
          error: true,
          loading: false,
        },
      };

    case LOADING_SHOW_DATA:
      return {
        ...state,
        show: {
          ...state.show,
          loading: !state.show.loading,
        },
      };

    default:
      return state;
  }
};

export default reducer;
