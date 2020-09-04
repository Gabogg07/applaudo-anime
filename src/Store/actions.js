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
  LOAD_SPECIFIC_CHARACTER_SUCCESS,
  LOAD_SPECIFIC_CHARACTER_ERROR,
  LOADING_SPECIFIC_CHARACTER,
  LOAD_SHOW_GENRES_SUCCESS,
  LOAD_SHOW_GENRES_ERROR,
  LOADING_SHOW_GENRES,
  LOAD_SEARCH_SUCCESS,
  LOAD_SEARCH_ERROR,
  LOADING_SEARCH,
  FILL_SEARCH_QUERY,
  CLEAN_SEARCH_DATA,
} from './actionTypes';

export const loadShowsSuccess = (shows, listType) => {
  console.log('action creator')
  return {
    type: LOAD_SHOWS_SUCESS,
    shows,
    listType,
  };
};

export const loadShowsError = (listType) => {
  return {
    type: LOAD_SHOWS_ERROR,
    listType,
  };
};

export const changeShowsLoadingState = (listType) => {
  return {
    type: LOADING_SHOWS,
    listType,
  };
};

export const loadShowDetailSuccess = (show) => {
  return {
    type: LOAD_SHOW_DETAIL_SUCCESS,
    show,
  };
};

export const loadShowDetailError = () => {
  return {
    type: LOAD_SHOW_DETAIL_ERROR,
  };
};

export const cleanShowData = () => {
  return {
    type: CLEAN_SHOW_DATA,
  };
};

export const changeShowDetailLoadingState = () => {
  return {
    type: LOADING_SHOW_DATA,
  };
};

export const loadShowCharactersSuccess = (characters) => {
  return {
    type: LOAD_SHOW_CHARACTERS_SUCCESS,
    characters,
  };
};

export const loadShowCharactersError = () => {
  return {
    type: LOAD_SHOW_CHARACTERS_ERROR,
  };
};

export const changeShowCharactersLoadingState = () => {
  return {
    type: LOADING_SHOW_CHARACTERS,
  };
};

export const loadSpecificCharacterSuccess = (character, characterId) => {
  return {
    type: LOAD_SPECIFIC_CHARACTER_SUCCESS,
    character,
    characterId,
  };
};

export const loadSpecificCharacterError = (characterId) => {
  return {
    type: LOAD_SPECIFIC_CHARACTER_ERROR,
    characterId,
  };
};

export const changeSpecificCharacterLoadingState = (characterId) => {
  return {
    type: LOADING_SPECIFIC_CHARACTER,
    characterId,
  };
};

export const loadShowChaptersSuccess = (chapters) => {
  return {
    type: LOAD_SHOW_CHAPTERS_SUCCESS,
    chapters,
  };
};

export const loadShowChaptersError = () => {
  return {
    type: LOAD_SHOW_CHAPTERS_ERROR,
  };
};

export const changeShowChaptersLoadingState = () => {
  return {
    type: LOADING_SHOW_CHAPTERS,
  };
};

export const loadShowGenresSuccess = (genres) => {
  return {
    type: LOAD_SHOW_GENRES_SUCCESS,
    genres,
  };
};

export const loadShowGenresError = () => {
  return {
    type: LOAD_SHOW_GENRES_ERROR,
  };
};

export const changeShowGenresLoadingState = () => {
  return {
    type: LOADING_SHOW_GENRES,
  };
};

export const loadSearchSuccess = (shows, showType) => {
  return {
    type: LOAD_SEARCH_SUCCESS,
    shows,
    showType,
  };
};

export const loadSearchError = (showType) => {
  return {
    type: LOAD_SEARCH_ERROR,
    showType,
  };
};

export const changeSearchLoadingState = (showType) => {
  return {
    type: LOADING_SEARCH,
    showType,
  };
};

export const cleanSearch = () => {
  return {
    type: CLEAN_SEARCH_DATA,
  };
};

export const fillSearchQuery = (query) => {
  return {
    type: FILL_SEARCH_QUERY,
    query,
  };
};
