// http://www.omdbapi.com/?apikey=857ca5ce&
// http://www.omdbapi.com/?t=fast857ca5ce&

async function main() {
  const data = await fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=857ca5ce&s=fast"
  );
  const dataRec = await data.json();
  console.log(dataRec);
}
main();
