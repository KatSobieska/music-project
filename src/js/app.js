import {select, classNames, settings, templates} from './settings.js';
import utils from './utils.js';
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

        thisApp.initHome();
        thisApp.initDiscover();
        thisApp.initSearch();
        thisApp.initSong();
      });
  },
  initSong: function() {
    const thisApp = this;

    for (let songData in thisApp.data.songs){
      new SongWidget(thisApp.data.songs[songData]);
    }

    const discoverPlayerWrapper = document.querySelectorAll('#discover .song-wrapper');  
    const searchPlayerWrapper = document.querySelectorAll('#search .song-wrapper');  

    let randomNumber = Math.floor(Math.random() * discoverPlayerWrapper.length + 1);

    let i = 0;

    discoverPlayerWrapper.forEach(element => {
      element.classList.add(classNames.elements.hidden);

      const songId = thisApp.data.songs[i].id;
      

      if(songId == randomNumber){
        element.classList.remove(classNames.elements.hidden);
      }

      i++;
    });  

    let u = 0;

    searchPlayerWrapper.forEach(element => {
      element.classList.add(classNames.elements.hidden);

      const inputValue = document.querySelector('#search-id');

      thisApp.searchButton = document.querySelector(select.button.searchButton);

      thisApp.searchButton.addEventListener('click', function(event){
        event.preventDefault();
        console.log('click');
        if(thisApp.data.songs[u].author.includes(inputValue.value) || thisApp.data.songs[u].title.includes(inputValue.value)){
          element.classList.remove(classNames.elements.hidden);
        }

        u++;

      });

      
    });
    
    thisApp.initWidget();

  },

  initWidget: function(){
    GreenAudioPlayer.init({ 
      selector: '.player', 
      stopOthersOnPlay: true
    });
  },

  initHome: function(){
    const thisApp = this;

    const generatedHTML = templates.home();
    
    thisApp.element = utils.createDOMFromHTML(generatedHTML);

    const homeContainer = document.querySelector(select.containerOf.home);

    homeContainer.appendChild(thisApp.element);

    let allCategories = [];

    for (let data of thisApp.data.songs) {
      for (let category of data.categories) {
        if (!allCategories.includes(category)) {
          allCategories.push(category);
        } else {
          const idIndex = allCategories.indexOf(category);
          allCategories.splice(idIndex, 0);
        }
      }
    }

    for (let singleCategory of allCategories) {
      thisApp.categoryElement = utils.createDOMListFromHTML(
        '<a href="#" link-category="' + singleCategory + '">' + singleCategory + '</a>'
      );
      thisApp.categoryContainer = document.querySelector(
        select.containerOf.categoriesContainer
      );
      thisApp.categoryContainer.appendChild(thisApp.categoryElement);

    }
  },

  initSearch: function(){
    const thisApp = this;

    const generatedHTML = templates.search();

    thisApp.element = utils.createDOMFromHTML(generatedHTML);

    const searchContainer = document.querySelector(select.containerOf.search);

    searchContainer.appendChild(thisApp.element);
  },

  initDiscover: function(){
    const thisApp = this;

    const generatedHTML = templates.discover();
    
    thisApp.element = utils.createDOMFromHTML(generatedHTML);

    const discoverContainer = document.querySelector(select.containerOf.discover);

    discoverContainer.appendChild(thisApp.element);

  },
 
  init: function () {
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();

  }
};

app.init();