import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import HeroParallax from './modules/HeroParllax';
import FormValidate from './modules/FormValidate';
import HideHeader from './modules/HideHeader';
import ImageCarousel from './modules/ImageCarousel';
import RevealOnScroll from './modules/RevealOnScroll';

let formValidate = new FormValidate();
let stickyHeader = new StickyHeader();
let heroParallax = new HeroParallax();
let hideHeader = new HideHeader();
let imageCarousel = new ImageCarousel();
new RevealOnScroll($('.intro__content__content'), "80%", "slide-left", "slide-left--is-visible" );
new RevealOnScroll($('.skills__figure'), "80%", "float-in", "float-in--is-visible" );
new RevealOnScroll($('.icon-container'), "70%", "grow", "grow--is-visible");

console.log('hey dawg');