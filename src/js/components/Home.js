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

    //     thisHome.dom = {};
    //     thisHome.dom.wrapper = element;

    //     thisHome.pages = document.querySelector(select.containerOf.pages).children;
    //     thisHome.navLinks = document.querySelectorAll(select.nav.links);

    //     const idFromHash = window.location.hash.replace('#/', '');

    //     let pageMatchingHash = thisHome.pages[0].id;

    //     for (let page of thisHome.pages) {
    //       if (page.id == idFromHash) {
    //         pageMatchingHash = page.id;
    //         console.log(pageMatchingHash);
    //         break;
    //       }
    //     }
    //     thisHome.activatePage(pageMatchingHash);
    //   }
    //   activatePage(pageId) {
    //     const thisHome = this;

    //     for (let page of thisHome.pages) {
    //       page.classList.toggle(classNames.pages.active, page.id == pageId);
    //     }
    //     for (let link of thisHome.navLinks) {
    //       link.classList.toggle(
    //         classNames.nav.active,
    //         link.getAttribute('href') == '#' + pageId
    //       );
    //     }
  }
}
export default Home;
