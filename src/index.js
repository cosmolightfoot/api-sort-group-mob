import { loadMovieList } from './build-gallery-components.js';
import { updateSearchTerm } from './search-component.js';
import movies from '../data/movies.js';
import { readFromQuery } from './hash-query.js';

loadMovieList(movies);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
});