export const settings = {
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
  },
};

export const select = {
  containerOf: {
    pages: '#pages',
    home: '.home-wrapper',
    search: '.search-wrapper',
    discover: '.discover-wrapper',
    musicHome: '.music-home',
    musicDiscover: '.music-discover',
    musicSearch: '.music-search',
    categoriesContainer: '.categories-links .list'

  },
  templateOf: {
    home: '#template-home-page',
    search: '#template-search-page',
    discover: '#template-discover-page',
    musicBar: '#template-music-bar',
  },
  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  pages: {
    active: 'active',
  },
  nav: {
    active: 'active',
  },
  elements: {
    hidden: 'hide',
    clicked: 'clicked',
    selected: '.selected',
  }
};

export const templates = {
  search: Handlebars.compile(
    document.querySelector(select.templateOf.search).innerHTML
  ),
  discover: Handlebars.compile(
    document.querySelector(select.templateOf.discover).innerHTML
  ),
  home: Handlebars.compile(
    document.querySelector(select.templateOf.home).innerHTML
  ),
  musicBar: Handlebars.compile(
    document.querySelector(select.templateOf.musicBar).innerHTML
  ),
};
