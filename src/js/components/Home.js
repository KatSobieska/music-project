import utils from '../utils.js';
import { select, templates } from '../settings.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
    thisHome.initWidgets();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.home();

    thisHome.element = utils.createDOMFromHTML(generatedHTML);

    const homeContainer = document.querySelector(select.containerOf.home);

    homeContainer.appendChild(thisHome.element);
  }

  initWidgets() {
    // eslint-disable-next-line no-undef
    GreenAudioPlayer.init({
      selector: '.player',
      stopOthersOnPlay: true,
    });
  }
}
export default Home;
