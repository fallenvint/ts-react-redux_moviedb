import React, {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {asyncFetchDataAction} from '../../store/actions/asyncActions';
import ListPoster from './ListPoster';
import Pagination from '../../components/pagination/Pagination';
import style from './List.module.css';

const List: FC = () => {
    const {page} = useParams();
    const dispatch: any = useDispatch();
    const storeMovies = useSelector((state: any) => state.movies.data);
    const pageNum = !page ? 1 : +page;

    useEffect(() => {
        dispatch(asyncFetchDataAction(pageNum));
    }, [pageNum, dispatch]);

    useEffect(() => {
        document.title = 'Movie DB';
    }, []);

    return storeMovies.total_pages && (
        <div>
            <div className="page-title">Latest Releases</div>
            <div className={`${style.posters} page-content`}>
                {
                    storeMovies.results?.map((movie: { id: number }) => {
                        return (
                            <ListPoster
                                key={movie.id}
                                movieItem={movie}
                                page={pageNum}/>
                        );
                    })
                }
            </div>
            <Pagination page={pageNum} totalPage={storeMovies.total_pages}/>
        </div>
    )
};

export default List;
