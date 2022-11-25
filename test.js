// https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=movie&plot=full
// "https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=furious"
// `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=857ca5ce`

// const movieList = document.querySelector(".top-picks");
const movieTemplate = document.querySelector(".top-picks");

const searchResult = document.querySelector(".movie__card");

// Load movies from API
async function searchBar(search) {
  const apiKey = `https://omdbapi.com/?s=${search}&page=1&apikey=857ca5ce`;
  const data = await fetch(`${apiKey}`);
  const dataRec = await data.json();
  console.log(dataRec.Search);
  // movieTemplate.innerHTML = dataRec.Search.map((movie) =>
  //   mvDataHTML(movie)
  // ).join("");
  if (dataRec.Response == true) {
    return `
      <div class="movie__card">
        <figure class="poster__wrapper">
          <img src="" alt="" class="top-picks--img" />
        </figure>
        <h4 class="move__title">Title: Fast Five</h4>
        <p class="movie__para">Year: 2011</p>
        <p class="movie__para">Type: movie</p>
      </div>`;
  }
}
