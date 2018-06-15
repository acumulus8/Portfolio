import $ from "jquery";

class Lightbox {
  constructor(boxToOpen, openBtn, closeBtn, classToToggle) {
    this.lightbox = boxToOpen;
    this.classToToggle = classToToggle;
    this.image = $(".lightbox__img-container__image");
    this.openBtn = openBtn;
    this.xBtn = closeBtn;
    this.prev = $("#js-prev");
    this.next = $("#js-next");
    this.imageSrc = [
      "./assets/images/lightboxImages/build-web-apps-cert.jpg",
      "./assets/images/lightboxImages/build-website-ui-cert.jpg",
      "./assets/images/lightboxImages/git-web-dev-job-cert.jpg",
      "./assets/images/lightboxImages/websites-from-scratch-cert.jpg",
      "./assets/images/lightboxImages/wp-for-beginners-cert.jpg"
    ];
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
    this.xBtn.on("click", () => {
      that.lightbox.removeClass(that.classToToggle);
    });
    this.lightbox.removeClass(this.classToToggle);
  }

  changeImage() {
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
  }
}

export default Lightbox;
