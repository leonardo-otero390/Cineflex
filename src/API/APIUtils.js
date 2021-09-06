import axios from 'axios';
const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/";
const MOVIES = "movies/";
const RESERVE_SEATS = "seats/book-many";

function getMoviesList(setFunction) {
    const promise = axios.get(API_URL + MOVIES);
    promise.then(res => setFunction(res.data));
}
function getSessionsList(setFunction, idMovie) {
    const MOVIE_SHOWTIME = `${idMovie}/showtimes`;
    const promise = axios.get(API_URL + MOVIES + MOVIE_SHOWTIME);
    promise.then(res => setFunction(res.data));
}
function getSeatsList(setFunction, idSession) {
    const SEATS = `showtimes/${idSession}/seats`;
    const promise = axios.get(API_URL + SEATS);
    promise.then(res => setFunction(res.data));
}
function reserveSeats(order,isReady) {
    if (!isReady) {
        alert('Por favor preencha todos os dados e escolha pelo menos um assento');
        return;
    }
    const request = axios.post(API_URL + RESERVE_SEATS, order);
}
export { getMoviesList, getSessionsList, getSeatsList, reserveSeats };