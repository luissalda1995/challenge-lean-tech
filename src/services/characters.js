import axios from 'axios';

const URL =
  'http://swapi.dev/api/people/?page=';

const charactersService = {
  getCharacters,
};

function getCharacters(pageNumber) {
  return axios
    .get(`${URL}${pageNumber}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      return []
    });
}

export default charactersService;
