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
    if(!url) url = `https://kitsu.io/api/edge/anime/${showId}/characters`
    console.log(url)
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
        console.log('DISPATCH', error)
        dispatch(loadShowCharactersError(error));
      });
  };
}

export function fetchShowChapter(showId, skip = 0) {
  return (dispatch) => {
    let url = `https://kitsu.io/api/edge/anime/${showId}/episodes`
    if(skip) url = url + '?page[limit]=10&page[offset]=' + skip

    console.log('LLAMANDO CON',skip, url)
    dispatch(changeShowChaptersLoadingState());
    fetch(`https://kitsu.io/api/edge/anime/${showId}/episodes`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        // console.log('RECIBO', res.links)
        dispatch(loadShowChaptersSuccess(res));
        return res.products;
      })
      .catch((error) => {
        console.log('ERROR OTRA VEZ')
        dispatch(loadShowChaptersError(error));
      });
  };
}
