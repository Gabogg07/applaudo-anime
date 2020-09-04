import React, {useReducer, createContext} from 'react';
import reducer from './reducer';

export const ShowsContext = createContext();

const initialState = {
  name: 'CONTEXTO BICHO',
  allShowsList: {},
  show: {
    error: false,
    loading: false,
    data: [],
  },
  chapters: {
    error: false,
    loading: false,
    data: [],
    links: {},
  },
  characters: {
    error: false,
    loading: false,
    list: [],
    data: {},
    links: {},
  },
  genres: {
    error: false,
    loading: false,
    data: [],
    list: [],
  },
  searchResults: {
    query: '',
    anime: {
      data: [],
    },
    manga: {
      data: [],
    },
  },
};

export const ShowsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShowsContext.Provider value={[state, dispatch]}>
      {props.children}
    </ShowsContext.Provider>
  );
};
