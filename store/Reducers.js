import {
    TMDB_POPULAR_MOVIE,
    TMDB_TOPRATED_MOVIE,
    TMDB_TREANDIING_MOVIE,
    FETCH_LIVE_TV_DATA
} from './Actions';

export const initialState = {
    Movies: {
        popularMovies: [],
        topRatedMovies: [],
        treandingMovies: []
    },
    Livetv: {
        data: []
    }
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case TMDB_POPULAR_MOVIE:
            state = {
                ...state,
                Movies: {
                    ...state.Movies,
                    popularMovies: action.payload
                }
            }
            break;
        case TMDB_TOPRATED_MOVIE:
            state = {
                ...state,
                Movies: {
                    ...state.Movies,
                    topRatedMovies: action.payload
                }
            }
            break;
        case TMDB_TREANDIING_MOVIE:
            state = {
                ...state,
                Movies: {
                    ...state.Movies,
                    treandingMovies: action.payload
                }
            }
            break;
        case FETCH_LIVE_TV_DATA:
            state = {
                ...state,
                Livetv: {
                    ...state.Livetv,
                    data: action.payload
                }
            }
            break;
    }

    return state;
}