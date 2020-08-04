import {LOAD_SHOWS} from './actionTypes';

export const loadShowsSuccess = (shows, showType) => {
    return ({
        type: LOAD_SHOWS,
        shows,
        showType,
      });
}
