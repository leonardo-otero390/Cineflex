import axios from 'axios';

//    GET METHOD
const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/";
const MOVIES = "movies/";

//const SEATS = `showtimes/${ID_DA_SESSAO}/seats`;
//    POST METHOD
const RESERVE_SEATS = "seats/book-many";

function getMoviesList(setFunction) {
    const promise = axios.get(API_URL + MOVIES);
    promise.then(res => setFunction(res.data));
}
function getSessionsList(setFunction,idMovie) {
    const MOVIE_SHOWTIME = `${idMovie}/showtimes`;
    const promise = axios.get(API_URL + MOVIES +MOVIE_SHOWTIME);
    promise.then(res => setFunction(res.data));
}
export {getMoviesList,getSessionsList};