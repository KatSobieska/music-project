import {select, templates} from '../settings.js';
import utils from '../utils.js';


class SongWidget {
  constructor (data) {
    const thisSong = this;

    thisSong.data = data;

    thisSong.render(select.containerOf.musicHome);
    thisSong.render(select.containerOf.musicDiscover);
  }

  render (musicDiv){
    const thisSong = this;

    const generatedHTML = templates.musicBar(thisSong.data);

    thisSong.element = utils.createDOMFromHTML(generatedHTML);

    const singleSongContainer = document.querySelector(musicDiv);

    singleSongContainer.appendChild(thisSong.element);
  }

}

export default SongWidget;