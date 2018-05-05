import $ from 'jquery';

class HeroParallax {
    constructor() {
        this.background = $('.large-hero__image-container');
        this.hero = $('.large-hero');
        this.content = $('.large-hero__content');
        this.window = $(window);
        this.scrollImage();
    }

    scrollImage() {
        const that = this;
        let heroHeight = this.hero.height();

        this.window.scroll(function () {
            let windowScroll = that.window.scrollTop();

            if (windowScroll <= heroHeight) {
                that.background.css({
                    'transform': 'translate(0px, -' + windowScroll / 14.8 + '%)'
                });

                that.content.css({
                    'transform': 'translate(0px, ' + windowScroll / 8 + '%)'
                });
                console.log(windowScroll);
            }
        });
    }
}

export default HeroParallax;