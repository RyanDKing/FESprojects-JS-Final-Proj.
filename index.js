// https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=movie&plot=full
// "https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=furious"

const searchResult = document.querySelector(".search__input");
const movieList = document.querySelector(".top-picks");
const loadState = document.querySelector(".loading");

function clearResult() {
  document.querySelector(".filter").value = "1";
}

async function onSearchChange(event) {
  const id = event.target.value;
  main(searchResult.value, id);
  console.log(document.querySelector(".filter"));
}

async function main(search, id) {
  let url = `https://omdbapi.com/?s=${search}&page=${id}&apikey=857ca5ce`;
  let res = await fetch(`${url}`);
  const data = await res.json();
  console.log(data);
  loadState.style.display = "inline";

  let moviesFilters = data.Search;
  for (let i = 0; i <= moviesFilters; i++) {
    if (moviesFilters[i] != "game") {
      console.log(moviesFilters[i]);
    }
  }
  console.log(moviesFilters);
  console.log(data);
  movieList.innerHTML = data.Search.map((movies) => mvDataHTML(movies)).join(
    ""
  );
}

function movieLoad() {
  return (window.onload = () => {
    document.querySelector(".btn").onclick = () => {
      main(searchResult.value);
      clearResult();
    };
  });
}

function mvDataHTML(movie) {
  return `<div class="movie__card">
  <figure class="poster__wrapper">
    <img src = "${
      movie.Poster != "N/A"
        ? movie.Poster
        : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
    }" alt = "movie poster"
      class="top-picks--img"
    />
  </figure>
  <h4 class="move__title">Title: ${movie.Title}</h4>
  <p class="movie__para">Year: ${movie.Year}</p>
  <p class="movie__para">Type: ${movie.Type}</p>

</div>`;
}

movieLoad();

// how reset option in html?

{
  /* <input id="result" type="text" />
<input type="button" value="Reset" onclick="clearResult()">
 */
}
