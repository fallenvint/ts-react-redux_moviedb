import {ADD_FAVORITES, REMOVE_FAVORITES} from '../actions/actionTypes';
import {IFavoriteObject} from '../../ts/interfaces';

export const favoritesReducer = (state: Array<IFavoriteObject> = [], action: { type: string, payload: object | number }) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return [action.payload].concat(...state);
        case REMOVE_FAVORITES:
            return [...state.filter((item) => item.id !== action.payload)];
        default:
            return state;
    }
};
