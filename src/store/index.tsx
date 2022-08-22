import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const favoriteList = JSON.parse(localStorage.getItem('ts-fav-movies') || '[]');
const store = createStore(rootReducer, {favorites: favoriteList}, applyMiddleware(thunk));

store.subscribe(() => {
    localStorage.setItem('ts-fav-movies', JSON.stringify(store.getState().favorites))
});

export default store;
