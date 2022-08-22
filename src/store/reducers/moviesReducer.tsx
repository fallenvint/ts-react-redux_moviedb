import {FETCH_DATA, GET_NEXT_MOVIE_ID} from '../actions/actionTypes';

const initialState = {
    data: {},
    npMovieId: 1
};

export const moviesReducer = (state: object = initialState, action: { type: string, payload: object }) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                data: action.payload
            };
        case GET_NEXT_MOVIE_ID:
            return {
                ...state,
                npMovieId: action.payload
            };
        default:
            return state;
    }
};
