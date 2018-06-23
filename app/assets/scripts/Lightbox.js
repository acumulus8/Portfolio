import $ from 'jquery';
import Lightbox from './modules/Lightbox';

new Lightbox($('.js-lightbox'), $('.js-certs-btn'), $('.js-x-cert'), 'lightbox--is-visible');
new Lightbox($('.js-resume'), $('.js-resume-btn'), $('.js-x-resume'), 'resume--is-visible');
