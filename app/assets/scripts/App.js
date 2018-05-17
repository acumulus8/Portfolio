import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import HeroParallax from './modules/HeroParllax';
import FormValidate from './modules/FormValidate';
import HideHeader from './modules/HideHeader';
import ImageCarousel from './modules/ImageCarousel';
import RevealOnScroll from './modules/RevealOnScroll';
import Lightbox from './modules/Lightbox';
import SmoothScroll from './modules/SmoothScroll';

let formValidate = new FormValidate();
let stickyHeader = new StickyHeader();
let heroParallax = new HeroParallax();
let hideHeader = new HideHeader();
let imageCarousel = new ImageCarousel();

new Lightbox($('.js-lightbox'), $('.js-certs-btn'), $('.js-x-cert'), 'lightbox--is-visible');
new Lightbox($('.js-resume'), $('.js-resume-btn'), $('.js-x-resume'), 'resume--is-visible');

new SmoothScroll($('.arrow-down-link'));
new SmoothScroll($('.secondary-nav a'));

new RevealOnScroll($('.intro__content__content'), "80%", "slide-left", "slide-left--is-visible" );
new RevealOnScroll($('.skills__figure'), "80%", "float-in", "float-in--is-visible" );
new RevealOnScroll($('.icon-container'), "70%", "grow", "grow--is-visible");


console.log('hey dawg');