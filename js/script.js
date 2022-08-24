"use strict";

import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import calculator from './modules/calculator';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', (e) => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 15000);

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    timer('.timer','2022-08-27');
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    calculator();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        filed: '.offer__dliser-inner'
    });
    
});
 
 
     