import $ from 'jquery';

class ImageCarousel {
    constructor() {
        this.slider = $('.slider');
        this.slideContainer = $('#slideContainer');
        this.img = $('.img');
        this.imgWidth = $('.img').width();
        this.currentSlide = 1;
        this.slideNumber = 1;
        this.pause = 3000;
        this.animateTime = 800;
        this.next = $('#next');
        this.prev = $('#prev');
        this.slideImage();
        this.previousImage();
        this.nextImage();
    }

    slideImage() {
        const that = this;
        let interval;

        function startSlider() {
            interval = setInterval(function() {
                that.slideContainer.animate({'margin-left': '-=' + that.imgWidth}, that.animateTime, function() {
                    that.currentSlide++;
                    that.slideNumber++;
                    if (that.currentSlide == that.img.length -1) {
                        that.currentSlide = 1;
                        that.slideNumber = 1;
                        that.slideContainer.css('margin-left', 0);
                    }
                });
            }, that.pause);
        }

        startSlider();

        function stopSlider() {
            clearInterval(interval);
        }

        function mouseStuff() {
            that.slider.mouseenter(function() {
                stopSlider();
            });
            that.slider.mouseleave(function() {
                startSlider();
            })
        }

        mouseStuff();
    }

    previousImage() {
        const that = this;
        this.prev.on('click', function() {
            that.slideContainer.animate({'margin-left': '+=' + that.imgWidth}, that.animateTime,
            function() {
                that.currentSlide--;
                that.slideNumber--;
                if (that.currentSlide === 0) {
                    that.currentSlide = that.img.length -2;
                    that.slideContainer.css('margin-left', '-=' + that.imgWidth * 4);
                }
            });
        });
    }

    nextImage() {
        const that = this;
        this.next.on('click', function() {
            that.slideContainer.animate({'margin-left': '-=' + that.imgWidth}, that.animateTime,
            function() {
                that.currentSlide++;
                that.slideNumber++;
                if (that.currentSlide == that.img.length -1) {
                    that.currentSlide = 1;
                    that.slideContainer.css('margin-left', 0);
                }
            });
        });
    }
}

export default ImageCarousel;