import axios from 'axios';

export const TMDB_TREANDIING_MOVIE = 'TMDB_TREANDIING_MOVIE';
export const TMDB_TOPRATED_MOVIE = 'TMDB_TOPRATED_MOVIE';
export const TMDB_POPULAR_MOVIE = 'TMDB_POPULAR_MOVIE';
export const FETCH_LIVE_TV_DATA = 'FETCH_LIVE_TV_DATA';

export const BASE_TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
const TMDB_API_KEY = '270d2766a0ca65e9a65a6c8dbd02da2d';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_Index_Url = {
    TopRated: `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`,
    Treanding: `${TMDB_BASE_URL}/trending/all/week?api_key=${TMDB_API_KEY}`,
    Popular: `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&sort_by=popularity.desc`
}

const BASED_API_URL = "https://moviebazzar-api.herokuapp.com";

const TV_APIURL = `${BASED_API_URL}/livetv`;
export const MOVIE_APIURL = `${BASED_API_URL}/Movie`;

export function fetch_Treanding_Movie() {
    return axios.get(TMDB_Index_Url.Treanding)
        .then(({ data }) => data.results)
}

export function fetch_TopRated_Movie() {
    return axios.get(TMDB_Index_Url.TopRated)
        .then(({ data }) => data.results)
}

export function fetch_Popular_Movie() {
    return axios.get(TMDB_Index_Url.Popular)
        .then(({ data }) => data.results)
}

export function fetch_Livetv_data() {
    const NO_Allowed_Country = ["BANGLA ENT."];
    return axios.get(TV_APIURL)
        .then(({ data }) => {
            return data.filter(({ inf }) => !NO_Allowed_Country.includes(inf.groupTitle))
        })
}