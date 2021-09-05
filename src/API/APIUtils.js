import axios from 'axios';

//    GET METHOD
const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex";
const MOVIES = "/movies";
//const MOVIE_SHOWTIME = `${ID_DO_FILME}/showtimes`;
//const SEATS = `showtimes/${ID_DA_SESSAO}/seats`;
//    POST METHOD
const RESERVE_SEATS = "seats/book-many";

export default function getMoviesList(setFunction) {
    const promise = axios.get(API_URL + MOVIES);
    promise.then(res => setFunction(res.data));
}