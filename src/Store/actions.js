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

export const loadShowsSuccess = (shows, showType) => {
  return {
    type: LOAD_SHOWS_SUCESS,
    shows,
    showType,
  };
};

export const loadShowsError = (showType) => {
  return {
    type: LOAD_SHOWS_ERROR,
    showType,
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
