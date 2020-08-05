import {
  loadShowsSuccess,
  loadShowsError,
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

} from '../Store/actions';

export function fetchShowDetail(showId) {
  return (dispatch) => {
    dispatch(changeShowDetailLoadingState());
    fetch('https://kitsu.io/api/edge/anime/' + showId)
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

export function fetchShowCharacters(showId, url) {
  return (dispatch) => {
    if (!url) {
      url = `https://kitsu.io/api/edge/anime/${showId}/characters`;
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

export function fetchCharacterById(url, characterId){
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

export function fetchShowChapter(showId, url) {
  return (dispatch) => {
    if (!url) {
      url = `https://kitsu.io/api/edge/anime/${showId}/episodes`;
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

export function fetchShowGenres(showId) {
  return (dispatch) => {
    let url = `https://kitsu.io/api/edge/anime/${showId}/genres`;
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
