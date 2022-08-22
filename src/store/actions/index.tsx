import {ADD_FAVORITES, REMOVE_FAVORITES, FETCH_DATA, GET_NEXT_MOVIE_ID} from './actionTypes';
import {IFavoriteObject} from '../../ts/interfaces';

export const fetchMoviesAction = (payload: object) => {
    return {
        type: FETCH_DATA,
        payload
    }
};

export const fetchNextIdAction = (payload: number) => {
    return {
        type: GET_NEXT_MOVIE_ID,
        payload
    }
};

export const addFavoriteAction = (payload: IFavoriteObject) => {
    return {
        type: ADD_FAVORITES,
        payload
    }
};

export const removeFavoriteAction = (payload: number) => {
    return {
        type: REMOVE_FAVORITES,
        payload
    }
};
