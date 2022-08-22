import axios from 'axios';
import {fetchMoviesAction, fetchNextIdAction} from './index';

const moviesJSON = async (pageNum: number) => {
    return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${pageNum}`);
};

export const asyncFetchDataAction = (page: number) => {
    return (dispatch: any) => {
        moviesJSON(page).then(
            json => dispatch(fetchMoviesAction(json.data))
        );
        moviesJSON(page+1).then(
            json => dispatch(fetchNextIdAction(json.data.results?.[0].id))
        );
    }
};