import { MOVIES, SLIDER_MOVIES } from "./movies.js";

function getParams(id){
    const params = new URLSearchParams(window.location.search);
    return params.get(id);
}

function init(){

    const allMovies = [...MOVIES, ...SLIDER_MOVIES];
    const id = getParams('id');
    const movie = allMovies.find((m)=> m.id === id);
    const movieImg = document.getElementById('movieImage');
    const titleEl = document.getElementById('title');
    const infoEl = document.getElementById('movieInfo');
    movieImg.src = movie.image;
    titleEl.textContent = movie.title;
    infoEl.textContent = movie.description;
}

init ()
