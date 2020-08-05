import {
  LOAD_SHOWS_SUCESS,
  LOAD_SHOWS_ERROR,
  LOAD_SHOW_DETAIL_SUCCESS,
  LOAD_SHOW_DETAIL_ERROR,
  CLEAN_SHOW_DATA,
  LOADING_SHOWS,
  LOADING_SHOW_DATA,
  LOAD_SHOW_CHARACTERS_SUCCESS, 
  LOAD_SHOW_CHARACTERS_ERROR, 
  LOADING_SHOW_CHARACTERS, 
  LOAD_SHOW_CHAPTERS_SUCCESS, 
  LOAD_SHOW_CHAPTERS_ERROR, 
  LOADING_SHOW_CHAPTERS
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

    case LOAD_SHOW_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters:{
          error:false,
          loading:false,
          ...action.characters
        }
      }

    case LOAD_SHOW_CHARACTERS_ERROR:
      return {
        ...state,
        chapters:{
          error:true,
          loading:false,
        }
      }

      case LOADING_SHOW_CHARACTERS:
        return {
          ...state,
          characters:{
            ...state.characters,
            loading: !state.characters.loading,
          }
        }

    default:
      return state;
  }
};

export default reducer;
