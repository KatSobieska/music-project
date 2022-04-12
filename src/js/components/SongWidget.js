import {select, templates} from '../settings.js';
import utils from '../utils.js';


class SongWidget {
  constructor (data) {
    const thisSong = this;

    thisSong.data = data;

    thisSong.renderHome();
    thisSong.renderDiscover();
    thisSong.renderSearch();
  }

  renderHome (){
    const thisSong = this;

    const generatedHTML = templates.musicBar(thisSong.data);

    thisSong.element = utils.createDOMFromHTML(generatedHTML);

    const singleSongContainer = document.querySelector(select.containerOf.musicHome);

    singleSongContainer.appendChild(thisSong.element);
  }

  renderDiscover (){
    const thisSong = this;

    const generatedHTML = templates.musicBar(thisSong.data);

    thisSong.element = utils.createDOMFromHTML(generatedHTML);

    const singleSongContainer = document.querySelector(select.containerOf.musicDiscover);

    singleSongContainer.appendChild(thisSong.element);
  }

  renderSearch (){
    const thisSong = this;

    const generatedHTML = templates.musicBar(thisSong.data);

    thisSong.element = utils.createDOMFromHTML(generatedHTML);

    const singleSongContainer = document.querySelector(select.containerOf.musicSearch);

    singleSongContainer.appendChild(thisSong.element);
  }

}

export default SongWidget;