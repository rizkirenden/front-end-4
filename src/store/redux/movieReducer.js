import { getData } from "../../service/api";

// Action types
const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

// Initial state
const initialState = {
  topRating: [],
  trending: [],
  newRelease: [],
  loading: false,
  error: null,
};

// Action creators
export const fetchMoviesRequest = () => ({ type: FETCH_MOVIES_REQUEST });
export const fetchMoviesSuccess = (category, data) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { category, data },
});
export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

// Thunk action to fetch movies
export const fetchMovies = (category) => async (dispatch) => {
  dispatch(fetchMoviesRequest());
  try {
    const data = await getData(category);
    dispatch(fetchMoviesSuccess(category, data));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

// Reducer
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        [action.payload.category]: action.payload.data,
      };
    case FETCH_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
