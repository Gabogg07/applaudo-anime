import {
  loadShowsSuccess,
  loadShowsError,
  loadShowDetailSuccess,
  loadShowDetailError,
  changeShowDetailLoadingState,
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
