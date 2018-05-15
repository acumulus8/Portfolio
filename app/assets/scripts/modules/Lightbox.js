import $ from 'jquery';

class Lightbox {
    constructor() {
        this.lightbox = $('.js-lightbox');
        this.certBtn = $('.js-certs-btn');
        this.xBtn = $('.js-x');
        this.openLightbox();
        this.closeLightbox();
    }

    openLightbox() {
        const that = this;
        this.certBtn.on('click', function(e) {
            that.lightbox.addClass('lightbox--is-visible');
            e.preventDefault();
        })
    }

    closeLightbox() {
        const that = this;
        this.xBtn.on('click', function() {
            that.lightbox.removeClass('lightbox--is-visible');
        })
    }
}

export default Lightbox;