// https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=movie&plot=full
// "https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=furious"

const searchResult = document.querySelector(".search__input");
const movieList = document.querySelector(".top-picks");
const id = localStorage.getItem("id");
console.log(id);

async function onSearchChange(event) {
  const id = event.target.value;
  main(id);
  console.log(id);
}

async function main(search, id) {
  let url = `https://omdbapi.com/?s=${search}&page=${id}&apikey=857ca5ce`;
  let res = await fetch(`${url}`);
  const data = await res.json();
  movieList.innerHTML = data.Search.map((movie) => mvDataHTML(movie)).join("");
}

function findMovies() {
  let page = searchResult.value.trim();
  if (search.length > 0) {
    searchList.classList.remove("hide-search-list");
    main((search = "fast"));
  } else {
    searchList.classList.add("hide-search-list");
  }
}

function movieLoad(searchResult) {
  return (window.onload = () => {
    const searchField = document.querySelector(".search__input");
    document.querySelector(".btn").onclick = (movie) => {
      main(searchField.value);
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

movieLoad("id");
