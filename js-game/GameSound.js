'use strict';



class GameSound {

  static canUse = null;
  static sounds = {};
  static bgmNow = null;


  static Sound = function(url) {
    this.audio = new Audio('');
    this.audio.preload = 'auto';
    this.audio.src = url;
  };



  static init(isPc) {
    if (! isPc) { this.canUse = false }
    if (this.canUse !== null) {return}


    this.canUse = false;
    try {
      const au = new Audio('');
      this.canUse = !! au.canPlayType('audio/mpeg').match(/maybe|probebly/);
      } catch {}
    }
  


  static load(id, url) {

    if (this.canUse === false) {
      return Promise.resolve('cannot use sound : ' + id);



      this.sound[id] = new this.sound(url);
      const au = this.sounds[id].audio;


      return new Promise
    }
  }
}