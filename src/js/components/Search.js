import utils from '../utils.js';
import { select, templates } from '../settings.js';

class Search {
  constructor() {
    const thisSearch = this;

    thisSearch.render();
  }

  render() {
    const thisSearch = this;

    const generatedHTML = templates.search();

    thisSearch.element = utils.createDOMFromHTML(generatedHTML);

    const searchContainer = document.querySelector(select.containerOf.search);

    searchContainer.appendChild(thisSearch.element);
  }
}
export default Search;
