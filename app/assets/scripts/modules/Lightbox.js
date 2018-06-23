import $ from "jquery";

class Lightbox {
  constructor(boxToOpen, openBtn, closeBtn, classToToggle) {
    this.lightbox = boxToOpen;
    this.classToToggle = classToToggle;
    /* this.image = $(".lightbox__img-container__image"); */
    this.images = document.querySelectorAll(".lightbox__img-container__image");
    this.openBtn = openBtn;
    this.xBtn = closeBtn;
    this.prev = $("#js-prev");
    this.next = $("#js-next");
    this.dots = document.querySelectorAll(
      ".lightbox__img-container__dot-box__dot"
    );
    this.i = 0;
    /* this.imageSrc = [
      "./assets/images/lightboxImages/build-web-apps-cert.jpg",
      "./assets/images/lightboxImages/build-website-ui-cert.jpg",
      "./assets/images/lightboxImages/git-web-dev-job-cert.jpg",
      "./assets/images/lightboxImages/websites-from-scratch-cert.jpg",
      "./assets/images/lightboxImages/wp-for-beginners-cert.jpg"
    ]; */
    /* this.openLightbox();
        this.closeLightbox();
        this.changeImage(); */
    this.events();
  }

  events() {
    this.openLightbox();
    this.closeLightbox();
    this.changeImage();
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeLightbox();
    }
  }

  openLightbox() {
    const that = this;
    this.openBtn.on("click", e => {
      that.lightbox.addClass(that.classToToggle);
      e.preventDefault();
    });
  }

  closeLightbox() {
    const that = this;
    this.xBtn.on("click", () => that.lightbox.removeClass(that.classToToggle));
    this.lightbox.removeClass(this.classToToggle);
  }

  defaultDisplay() {
    this.images.forEach(image => (image.style.display = "none"));
    this.images[0].style.display = "block";
    this.dots[0].classList.add("lightbox__img-container__dot-box__dot--active");
  }

  activateDot() {
    this.dots[this.i].classList.add(
      "lightbox__img-container__dot-box__dot--active"
    );
  }

  deactivateDot() {
    this.dots[this.i].classList.remove(
      "lightbox__img-container__dot-box__dot--active"
    );
  }

  changeImage() {
    this.defaultDisplay();
    const that = this;

    this.next.on("click", () => {
      this.images[this.i].style.display = "none";
      that.deactivateDot();

      if (this.i < this.images.length - 1) {
        this.i++;
        this.images[this.i].style.display = "block";
        that.activateDot();
      } else {
        this.i = 0;
        this.images[this.i].style.display = "block";
        that.activateDot();
      }
    });

    this.prev.on("click", () => {
      this.images[this.i].style.display = "none";
      that.deactivateDot();

      if (this.i > 0) {
        this.i--;
        this.images[this.i].style.display = "block";
        that.activateDot();
      } else if (this.i == 0) {
        this.i = this.images.length - 1;
        this.images[this.i].style.display = "block";
        that.activateDot();
      }
    });
  }

  /* changeImage() {
    let i = 0;
    this.image.attr("src", this.imageSrc[0]);
    const that = this;

    this.next.on("click", () => {
      if (i < that.imageSrc.length - 1) {
        i++;
        that.image.fadeOut("slow", () => {
          that.image.attr("src", that.imageSrc[i]);
          that.image.fadeIn("slow");
        });
      } else {
        i = 0;
        that.image.fadeOut("slow", () => {
          that.image.attr("src", that.imageSrc[i]);
          that.image.fadeIn("slow");
        });
      }
      console.log(i);
    });

    this.prev.on("click", () => {
      if (i > 0) {
        i--;
        that.image.fadeOut("medium", () => {
          that.image.attr("src", that.imageSrc[i]);
          that.image.fadeIn("fast");
        });
      } else if (i == 0) {
        i = that.imageSrc.length - 1;
        that.image.fadeOut("medium", () => {
          that.image.attr("src", that.imageSrc[i]);
          that.image.fadeIn("fast");
        });
      }
      console.log(i);
    });
  } */
}

export default Lightbox;
