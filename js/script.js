"use strict";
window.addEventListener('DOMContentLoaded', (e) => {
    const tabs = require('./modules/tabs'),
          timer = require('./modules/timer'),
          modal = require('./modules/modal'),
          cards = require('./modules/cards'),
          calculator = require('./modules/calculator'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider');

    tabs();
    timer();
    modal();
    cards();
});
 
 
     