import { settings, select, classNames } from './settings.js';
import Home from './components/Home.js';
import Discover from './components/Discover.js';
import Search from './components/Search.js';
import SongWidget from './components/SongWidget.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }
    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activatePage(id);

        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initSong: function() {
    const thisApp = this;

    for (let songData in thisApp.data.songs){
      new SongWidget(thisApp.data.songs[songData]);

    }
    thisApp.initWidgets();

  },

  initWidgets: function (){
    GreenAudioPlayer.init({
      selector: '.player', 
      stopOthersOnPlay: true
    });
  },


  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.songs;
    
    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse){
        thisApp.data.songs = parsedResponse;

        thisApp.initSong();
      });
  },

  initHome: function () {
    const thisApp = this;

    const homePage = document.querySelector(select.containerOf.home);

    thisApp.home = new Home(homePage);

  },
  initSearch: function () {
    const thisApp = this;

    const searchPage = document.querySelector(select.containerOf.search);

    thisApp.search = new Search(searchPage);
  },
  initDiscover: function () {
    const thisApp = this;

    const discoverPage = document.querySelector(select.containerOf.discover);

    thisApp.discover = new Discover(discoverPage);
  },

  init: function () {
    const thisApp = this;

    thisApp.initPages();
    thisApp.initData();
    thisApp.initHome();
    thisApp.initSearch();
    thisApp.initDiscover();
  },
};

app.init();
