// https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=movie&plot=full
// "https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=furious"

const searchResult = document.querySelector(".search__input");
const movieList = document.querySelector(".top-picks");
const loadState = document.querySelector(".loading");

async function onSearchChange(event) {
  const id = event.target.value;
  main(searchResult.value, id);
  console.log(document.querySelector(".filter"));
}

async function main(search, id) {
  let url = `https://omdbapi.com/?s=${search}&page=${id}&apikey=857ca5ce`;
  let res = await fetch(`${url}`);
  const data = await res.json();
  // console.log(data);
  console.log(data);
  loadState.style.display = "inline";

  let moviesFilters = data.Search;
  for (let i = 0; i <= moviesFilters; i++) {
    if (moviesFilters[i] === "movie") {
      console.log(moviesFilters[i]);
    }
  }

  console.log(moviesFilters);
  movieList.innerHTML = data.Search.map((movies) => {
    // movie type and if there is no Poster, do not display
    if (movies.Type === "movie" && movies.Poster !== "N/A") {
      return mvDataHTML(movies);
    }
  }).join("");
}

function movieLoad() {
  return (window.onload = () => {
    document.querySelector(".btn").onclick = () => {
      main(searchResult.value);
    };
  });
}

function mvDataHTML(movie) {
  return `<div class="movie__card">
  <figure class="poster__wrapper">
    <img src = "${movie.Poster}" alt = "movie poster"
      class="top-picks--img"
    />
  </figure>
  <h4 class="move__title">Title: ${movie.Title}</h4>
  <p class="movie__para">Year: ${movie.Year}</p>
  <p class="movie__para">Type:  ${movie.Type}</p>

</div>`;
}

movieLoad();
