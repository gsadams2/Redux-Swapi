// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
      console.log(res.data, "my response!!!");
      dispatch({ type: FETCH_SUCCESS, payload: res.data.results });
    })
    .catch(err => dispatch({ type: FETCH_ERROR }));
};
