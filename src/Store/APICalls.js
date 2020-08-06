import {
  loadShowsSuccess,
  loadShowsError,
  changeShowsLoadingState,
  loadShowDetailSuccess,
  loadShowDetailError,
  changeShowDetailLoadingState,
  loadShowCharactersSuccess,
  loadShowCharactersError,
  changeShowCharactersLoadingState,
  loadShowChaptersSuccess,
  loadShowChaptersError,
  changeShowChaptersLoadingState,
  loadSpecificCharacterSuccess,
  loadSpecificCharacterError,
  changeSpecificCharacterLoadingState,
  changeShowGenresLoadingState,
  loadShowGenresSuccess,
  loadShowGenresError,
  loadSearchSuccess,
  loadSearchError,
  changeSearchLoadingState,
} from '../Store/actions';

import {showListType} from '../constants';

function typeToUrl(type) {
  const query = {
    [showListType.ANIME]: 'anime',
    [showListType.MANGA]: 'manga',
    [showListType.TRENDING_ANIME]: 'trending/anime',
    [showListType.TRENDING_MANGA]: 'trending/manga',
  };

  return query[type];
}

//Show Detail API Calls
export function fetchShowDetail(showId, showType) {
  return (dispatch) => {
    dispatch(changeShowDetailLoadingState());
    fetch(`https://kitsu.io/api/edge/${typeToUrl(showType)}/${showId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowDetailSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(loadShowDetailError(error));
      });
  };
}

export function fetchShowCharacters(showId, url, showType) {
  return (dispatch) => {
    if (!url) {
      url = `https://kitsu.io/api/edge/${typeToUrl(
        showType,
      )}/${showId}/characters`;
    }
    dispatch(changeShowCharactersLoadingState());
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowCharactersSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(loadShowCharactersError(error));
      });
  };
}

export function fetchCharacterById(url, characterId) {
  return (dispatch) => {
    dispatch(changeSpecificCharacterLoadingState(characterId));
    fetch(url + '/character')
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadSpecificCharacterSuccess(res.data, characterId));
        return res.data;
      })
      .catch((error) => {
        dispatch(loadSpecificCharacterError(characterId));
      });
  };
}

export function fetchShowChapter(showId, url, showType) {
  return (dispatch) => {
    if (!url) {
      url = `https://kitsu.io/api/edge/${typeToUrl(showType)}/${showId}`;
      if (showType === showListType.ANIME) {
        url = url + '/episodes';
      } else {
        url = url + '/chapters';
      }
    }
    dispatch(changeShowChaptersLoadingState());
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowChaptersSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(loadShowChaptersError(error));
      });
  };
}

export function fetchShowGenres(showId, showType) {
  return (dispatch) => {
    let url = `https://kitsu.io/api/edge/${typeToUrl(
      showType,
    )}/${showId}/genres`;
    dispatch(changeShowGenresLoadingState());
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowGenresSuccess(res.data));
        return res.data;
      })
      .catch((error) => {
        dispatch(loadShowGenresError(error));
      });
  };
}

//HomeScreen Api Calls
export function fetchShowsList(type) {
  return (dispatch) => {
    let url = `https://kitsu.io/api/edge/${typeToUrl(type)}`;
    dispatch(changeShowsLoadingState(type));
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowsSuccess(res, type));
        return res;
      })
      .catch((error) => {
        dispatch(loadShowsError(type, error));
      });
  };
}

export function searchShow(query, type) {
  return (dispatch) => {
    let url = `https://kitsu.io/api/edge/${typeToUrl(type)}?filter[text]=${query}`;
    console.log(url)
    console.log(type)
    dispatch(changeSearchLoadingState(type));
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
        dispatch(loadSearchSuccess(res, type));
        return res;
      })
      .catch((error) => {
        console.log('ERROR', error)
        dispatch(loadSearchError(type, error));
      });
  };
}