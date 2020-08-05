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
  LOADING_SHOW_CHAPTERS,
} from './actionTypes';

const initialState = {
  show: {
    error: false,
    loading: false,
  },
  chapters: {
    error: false,
    loading: false,
    data: [],
    links: {},
  },
  characters: {
    error: false,
    loading: false,
    data:[],
  },
  data:[],
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
        characters: {
          error: false,
          loading: false,
          data: action.characters,
        },
      };

    case LOAD_SHOW_CHARACTERS_ERROR:
      return {
        ...state,
        characters: {
          error: true,
          loading: false,
        },
      };

    case LOADING_SHOW_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          loading: !state.characters.loading,
        },
      };

    case LOAD_SHOW_CHAPTERS_ERROR:
      return {
        ...state,
        chapters: {
          error: true,
          loading: false,
        },
      };

    case LOAD_SHOW_CHAPTERS_SUCCESS:
      let data = [...state.chapters.data, ...action.chapters.data];
      return {
        ...state,
        chapters: {
          error: false,
          loading: false,
          data: data,
          links: action.chapters.links,
        },
      };

    case LOADING_SHOW_CHAPTERS:
      return {
        ...state,
        chapters: {
          ...state.chapters,
          loading: !state.chapters.loading,
        },
      };

    case CLEAN_SHOW_DATA:
      console.log('limpiando')
      let emptyData = {
        error: false,
        loading: false,
      }
      return {
        ...state,
        chapters:{
          ...emptyData,
          links:{},
          data:[],
        },
        characters:{
          ...emptyData,
          links:{},
          data:[],
        },
        show:{
          ...emptyData
        }
      }

    default:
      return state;
  }
};

export default reducer;
