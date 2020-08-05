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
        return res.products;
      })
      .catch((error) => {
        dispatch(loadShowDetailError(error));
      });
  };
}

export function fetchShowCharacters(showId) {
  return (dispatch) => {
    dispatch(changeShowCharactersLoadingState());
    fetch(`https://kitsu.io/api/edge/anime/${showId}/episodes`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowCharactersSuccess(res.data));
        return res.products;
      })
      .catch((error) => {
        dispatch(loadShowCharactersError(error));
      });
  };
}

export function fetchShowChapter(showId) {
  return (dispatch) => {
    dispatch(changeShowChaptersLoadingState());
    fetch(`https://kitsu.io/api/edge/anime/${showId}/characters`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowChaptersSuccess(res.data));
        return res.products;
      })
      .catch((error) => {
        dispatch(loadShowChaptersError(error));
      });
  };
}
