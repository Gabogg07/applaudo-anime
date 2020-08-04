import {LOAD_SHOWS_SUCESS, LOAD_SHOWS_ERROR, LOAD_SHOW_DETAIL_SUCCESS, LOAD_SHOW_DETAIL_ERROR, CLEAN_SHOW_DATA, LOADING_SHOWS, LOADING_SHOW_DATA} from './actionTypes';

export const loadShowsSuccess = (shows, showType) => {
    return ({
        type: LOAD_SHOWS_SUCESS,
        shows,
        showType,
      });
}

export const loadShowsError = (showType) => {
    return ({
        type: LOAD_SHOWS_ERROR,
        showType,
      });
}




export const loadShowDetailSuccess = (show) => {
    return ({
        type: LOAD_SHOW_DETAIL_SUCCESS,
        show,
      });
}

export const loadShowDetailError = (error) => {
    return ({
        type: LOAD_SHOW_DETAIL_ERROR,
      });
}

export const cleanShowData = () => {
    return ({
        type: CLEAN_SHOW_DATA,
      });
}

export const changeShowDetailLoadingState = () => {
    return ({
        type: LOADING_SHOW_DATA,
    })
}
