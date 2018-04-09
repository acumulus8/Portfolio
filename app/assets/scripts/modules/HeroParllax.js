import $ from 'jquery';

class HeroParallax {
    constructor() {
        this.background = $('.large-hero__image-container');
        this.content = $('.large-hero__content');
        this.window = $(window);
        this.scrollImage();
    }

    scrollImage() {
        const that = this;
        this.window.scroll(function() {
            let windowScroll = that.window.scrollTop();

            that.background.css({
                'transform' : 'translate(0px, -'+ windowScroll /16 +'%)'
            });

            that.content.css({
                'transform' : 'translate(0px, '+ windowScroll /13 +'%)'
            });
        });
    }
}

export default HeroParallax;