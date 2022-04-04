import utils from '../utils.js';
import { select, templates } from '../settings.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.home();

    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    const homeContainer = document.querySelector(select.containerOf.home);

    homeContainer.appendChild(thisHome.element);
  }
}
export default Home;
