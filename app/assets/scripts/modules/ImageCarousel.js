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
        this.dot1 = $('#dot1');
        this.dot2 = $('#dot2');
        this.dot3 = $('#dot3');
        this.dot4 = $('#dot4');
        this.next = $('#next');
        this.prev = $('#prev');
        this.slideImage();
        this.previousImage();
        this.nextImage();
        this.changeDotColor();
    }

    slideImage() {
        const that = this;
        let interval;

        function startSlider() {
            interval = setInterval(function() {
                console.log('fire slide move');
                that.slideContainer.animate({'margin-left': '-=' + that.imgWidth}, 1500, function() {
                    that.currentSlide++;
                    that.slideNumber++;
                    if (that.currentSlide == that.img.length -1) {
                        that.currentSlide = 1;
                        that.slideNumber = 1;
                        that.slideContainer.css('margin-left', 0);
                    }
                });

                console.log(that.currentSlide);
            }, that.pause);
        }

        startSlider();

        function stopSlider() {
            clearInterval(interval);
        }

        function mouseStuff() {
            that.slider.mouseenter(function() {
                console.log('mouse in');
                stopSlider();
            });
            that.slider.mouseleave(function() {
                console.log('mouse out');
                startSlider();
            })
        }

        mouseStuff();
    }

    previousImage() {
        const that = this;
        this.prev.on('click', function() {
            console.log('previous');
            that.slideContainer.animate({'margin-left': '+=' + that.imgWidth}, 1500,
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
            console.log('next');
            that.slideContainer.animate({'margin-left': '-=' + that.imgWidth}, 1500, 
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

    changeDotColor() {
        const that = this;
        let interval;
        

        function increaseSlideNumber() {
            that.slideNumber++;
        }

        function resetSlideNumber() {
            that.slideNumber = 1;
        }

        function startSlider() {
            interval = setInterval(function() {
                console.log('dot number ' + that.slideNumber);
                if (that.slideNumber === 1) {
                    that.dot1.addClass('is-white');
                    that.dot2.removeClass('is-white');
                    that.dot3.removeClass('is-white');
                    that.dot4.removeClass('is-white');
                    //increaseSlideNumber();
                } else if (that.slideNumber === 2) {
                    that.dot2.addClass('is-white');
                    that.dot1.removeClass('is-white');
                    that.dot3.removeClass('is-white');
                    that.dot4.removeClass('is-white');
                    //increaseSlideNumber();
                } else if (that.slideNumber === 3) {
                    that.dot3.addClass('is-white');
                    that.dot1.removeClass('is-white');
                    that.dot2.removeClass('is-white');
                    that.dot4.removeClass('is-white');
                    //increaseSlideNumber();
                } else if (that.slideNumber === 4) {
                    that.dot4.addClass('is-white');
                    that.dot1.removeClass('is-white');
                    that.dot2.removeClass('is-white');
                    that.dot3.removeClass('is-white');
                    //resetSlideNumber()
                } 
            }, 3000);
        }

        startSlider();

        function stopSlider() {
            clearInterval(interval);
        }

        function mouseStuff() {
            that.slider.mouseenter(function() {
                console.log('mouse in');
                stopSlider();
            });
            that.slider.mouseleave(function() {
                console.log('mouse out');
                startSlider();
            })
        }

        mouseStuff();
    }
}

export default ImageCarousel;