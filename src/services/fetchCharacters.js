
function fetchCharacters(pageNum = 1) {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${pageNum}`)
    .then(response => response.json());
}

export default fetchCharacters;
