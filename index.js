// Sækja element úr DOM/HTML skránni
console.log("Hello word")
import {MOVIES, SLIDER_MOVIES, CATEGORIES} from "/movies.js"
const container = document.getElementById("movies-container");
const action = document.getElementById("action");
const horror = document.getElementById("horror")
const comedy = document.getElementById("comedy")
const sciFi = document.getElementById("scifi")
const drama = document.getElementById("drama")
const animation = document.getElementById("animation")

const containerSlider = document.getElementById("swiper-wrapper");

// function rendermovies(catergory, feature) 
function card(m){
    const div =document.createElement('div')
    div.classList.add("movieDiv")
    div.innerHTML =
    `
    <h2>${m.title}</h2>
    <a href="/watch.html?id=${m.id}"><img src="${m.image}" alt=""></a>
    `
     return div

}

function populateMovie (movies,category){
    movies.forEach((m) => {
        const movieCards= card(m)
         category.appendChild(movieCards)
        
    })
}

// populateMovie(MOVIES)
const actionMovies= MOVIES.filter(movie => movie.category=== 'Action');
populateMovie(actionMovies,action)

const horrorMovies= MOVIES.filter(movie => movie.category=== 'Horror');
populateMovie(horrorMovies,horror)

const comedyMovies= MOVIES.filter(movie => movie.category=== 'Comedy');
populateMovie(comedyMovies,comedy)

const sciFiMovies= MOVIES.filter(movie => movie.category=== 'Sci-Fi');
populateMovie(sciFiMovies,sciFi)

const dramaMovies= MOVIES.filter(movie => movie.category=== 'Drama');
populateMovie(dramaMovies,drama) 

const animationMovies= MOVIES.filter(movie => movie.category=== 'Animation');
populateMovie(animationMovies,drama) 







// slider
function slide(s){
    console.log("inslide")
    const div =document.createElement('div')
    div.classList.add("swiper-slide")
    div.innerHTML =
    `<img src="${s.image}" class="imageSwiper" alt=""/>
    <div class="text-overlay"><a href="/watch.html?id=${s.id}"> <h2>"${s.title}"</h2>
    <p>"${s.description}"</p></a> </div>`
    return(div)

}

function populateSlider (sliderMovies) {
    sliderMovies.forEach( (s) => {
        console.log(s)
        const slider = slide(s)
        containerSlider.appendChild(slider)
    })
}

populateSlider(SLIDER_MOVIES)


//   const section = document.createElement("movies");
//   section.style.marginBottom = "30px";

//   const h3 = document.createElement("h3");
//   h3.textContent = catergory;
//   section.appendChild(h3);

//   if (subtitle) {
//     const p = document.createElement("p");
//     p.textContent = feature;
//     p.style.marginTop = "4px";
//     p.style.opacity = "0.8";
//     section.appendChild(p);
//   }
// output.appendChild(section);
//   return section;
// }
// {
// for (const upplysingar in MOVIES) {
//     if (typeof [upplysingar] === "Action") {
//       const p = document.createElement("p");
//       p.textContent = `${upplysingar}:${MOVIES[upplysingar]}`;
//       s.appendChild(p);
//     }
//   }
// }

// Búa til fall sem býr til Cards fyrir hverja mynd í fylkinu

// Búa til fall sem bætir við mynd í slider



// Búa til fall sem renderar allar myndir eða lista af myndum í gefinn selector ef það á við

// Búa til event listener fyrir slider til að handle-a play takkann

// Búa til event listener fyrir search input til að filter-a myndir

// Búa til fall sem initialiserar allt þegar síðunni er hlaðið

// Kalla á initialize fallið þegar DOM er tilbúið
