import {
  LOAD_SHOWS_SUCESS,
  LOAD_SHOWS_ERROR,
  LOADING_SHOWS,
  LOAD_SHOW_DETAIL_SUCCESS,
  LOAD_SHOW_DETAIL_ERROR,
  CLEAN_SHOW_DATA,
  LOADING_SHOW_DATA,
  LOAD_SHOW_CHARACTERS_SUCCESS,
  LOAD_SHOW_CHARACTERS_ERROR,
  LOADING_SHOW_CHARACTERS,
  LOAD_SHOW_CHAPTERS_SUCCESS,
  LOAD_SHOW_CHAPTERS_ERROR,
  LOADING_SHOW_CHAPTERS,
  LOAD_SPECIFIC_CHARACTER_SUCCESS,
  LOAD_SHOW_GENRES_SUCCESS,
  LOAD_SHOW_GENRES_ERROR,
  LOADING_SHOW_GENRES,
  LOAD_SEARCH_SUCCESS,
  LOAD_SEARCH_ERROR,
  LOADING_SEARCH,
  FILL_SEARCH_QUERY,
  CLEAN_SEARCH_DATA,
} from './actionTypes';

// const initialState = {
//   allShowsList: {},
//   show: {
//     error: false,
//     loading: false,
//     data: [],
//   },
//   chapters: {
//     error: false,
//     loading: false,
//     data: [],
//     links: {},
//   },
//   characters: {
//     error: false,
//     loading: false,
//     list: [],
//     data: {},
//     links: {},
//   },
//   genres: {
//     error: false,
//     loading: false,
//     data: [],
//     list: [],
//   },
//   searchResults: {
//     query:"",
//     anime: {
//       data: [],
//     },
//     manga: {
//       data: [],
//     },
//   },
// };

const reducer = (state, action) => {
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
          ...state.show,
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
          ...state.characters,
          error: false,
          loading: false,
          list: [...state.characters.list, ...action.characters.data],
          links: action.characters.links,
        },
      };

    case LOAD_SHOW_CHARACTERS_ERROR:
      return {
        ...state,
        characters: {
          ...state.characters,
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

    case LOAD_SPECIFIC_CHARACTER_SUCCESS:
      return {
        ...state,
        characters: {
          ...state.characters,
          data: {
            ...state.characters.data,
            [action.characterId]: action.character,
          },
        },
      };

    case LOAD_SHOW_GENRES_SUCCESS:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: false,
          data: action.genres,
        },
      };

    case LOAD_SHOW_GENRES_ERROR:
      return {
        ...state,
        genres: {
          ...state.genres,
          error: true,
          loading: false,
        },
      };

    case LOADING_SHOW_GENRES:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: !state.genres.loading,
        },
      };

    case LOAD_SHOWS_SUCESS:
      return {
        ...state,
        allShowsList: {
          ...state.allShowsList,
          [action.listType]: {
            error: false,
            loading: false,
            data: [
              ...state.allShowsList[action.listType].data,
              ...action.shows.data,
            ],
            links: action.shows.links,
          },
        },
      };

    case LOADING_SHOWS:
      let selectedList = state.allShowsList[action.listType];
      return {
        ...state,
        allShowsList: {
          ...state.allShowsList,
          [action.listType]: {
            loading: true,
            data: selectedList ? state.allShowsList[action.listType].data : [],
          },
        },
      };

    case LOAD_SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [action.showType]: {
            error: false,
            loading: false,
            data: [
              ...state.searchResults[action.showType].data,
              ...action.shows.data,
            ],
            links: action.shows.links,
          },
        },
      };

    case LOAD_SEARCH_ERROR:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [action.showType]: {
            ...state.searchResults[action.showType],
            error: false,
            loading: false,
          },
        },
      };

    case LOADING_SEARCH:
      let searchList = state.searchResults[action.showType];
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          [action.showType]: {
            ...searchList,
            loading: state.searchResults[action.showType]
              ? !searchList.loading
              : true,
          },
        },
      };

    case FILL_SEARCH_QUERY:
      return {
        ...state,
        searchResults: {
          ...state.searchResults,
          query: action.query,
        },
      };

    case CLEAN_SEARCH_DATA:
      return {
        ...state,
        searchResults: {
          query: '',
          anime: {
            data: [],
          },
          manga: {
            data: [],
          },
        },
      };

    case CLEAN_SHOW_DATA:
      let emptyData = {
        error: false,
        loading: false,
      };
      return {
        ...state,
        chapters: {
          ...emptyData,
          links: {},
          data: [],
        },
        characters: {
          ...emptyData,
          links: {},
          data: {},
          list: [],
        },
        show: {
          ...emptyData,
        },
        genres: {
          ...emptyData,
          links: {},
          data: [],
        },
      };

    default:
      return state;
  }
};

export default reducer;
