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

export function fetchShowCharacters(showId, url) {
  return (dispatch) => {
    if (!url) {
      url = `https://kitsu.io/api/edge/anime/${showId}/characters`;
    }
    console.log(url);
    dispatch(changeShowCharactersLoadingState());
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(loadShowCharactersSuccess(res.data));
        return res.products;
      })
      .catch((error) => {
        console.log('DISPATCH', error);
        dispatch(loadShowCharactersError(error));
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
        return res.products;
      })
      .catch((error) => {
        dispatch(loadShowChaptersError(error));
      });
  };
}
