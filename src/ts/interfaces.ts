export interface IFavoriteObject {
    id: number;
    title: string;
    overview: string;
    poster_path: string | undefined;
}

export interface IListPoster {
    movieItem: {
        id: number,
        title?: string,
        poster_path?: string
    };
    page: number;
}

export interface IModalParams {
    readonly page?: string;
    readonly id?: string;
}