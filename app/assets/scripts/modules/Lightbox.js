class Lightbox {
	constructor(boxToOpen, openBtn, closeBtn, classToToggle) {
		this.lightbox = boxToOpen;
		this.classToToggle = classToToggle;
		this.images = document.querySelectorAll(".lightbox__img-container__image");
		this.openBtn = openBtn;
		this.xBtn = closeBtn;
		this.prev = document.getElementById("js-prev");
		this.next = document.getElementById("js-next");
		this.showClass = "lightbox__img-container__image--visible";
		this.hideClass = "lightbox__img-container__image--hide";
		this.dots = document.querySelectorAll(".lightbox__img-container__dot-box__dot");
		this.i = 0;
		this.events();
	}

	events() {
		this.openBtn.addEventListener("click", this.openLightbox.bind(this));
		this.xBtn.addEventListener("click", this.closeLightbox.bind(this));
		this.prev.addEventListener("click", this.prevImage.bind(this));
		this.next.addEventListener("click", this.nextImage.bind(this));
		this.defaultDisplay();
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeLightbox();
		}
	}

	openLightbox(e) {
		e.preventDefault();
		this.lightbox.classList.add(this.classToToggle);
	}

	closeLightbox() {
		this.lightbox.classList.remove(this.classToToggle);
		this.lightbox.classList.remove(this.classToToggle);
	}

	defaultDisplay() {
		this.images.forEach((image) => image.classList.add(this.hideClass));
		this.images[0].classList.add(this.showClass);
		this.dots[0].classList.add("lightbox__img-container__dot-box__dot--active");
	}

	showImage() {
		if (this.images[this.i].classList.contains(this.hideClass)) {
			this.images[this.i].classList.remove(this.hideClass);
		}
		this.images[this.i].classList.add(this.showClass);
	}

	hideImage() {
		if (this.images[this.i].classList.contains(this.showClass)) {
			this.images[this.i].classList.remove(this.showClass);
		}
		this.images[this.i].classList.add(this.hideClass);
	}

	activateDot() {
		this.dots[this.i].classList.add("lightbox__img-container__dot-box__dot--active");
	}

	deactivateDot() {
		this.dots[this.i].classList.remove("lightbox__img-container__dot-box__dot--active");
	}

	nextImage() {
		this.hideImage();
		this.deactivateDot();
		if (this.i < this.images.length - 1) {
			this.i++;
			this.showImage();
			this.activateDot();
		} else {
			this.i = 0;
			this.showImage();
			this.activateDot();
		}
	}

	prevImage() {
		this.hideImage();
		this.deactivateDot();
		if (this.i > 0) {
			this.i--;
			this.showImage();
			this.activateDot();
		} else if (this.i == 0) {
			this.i = this.images.length - 1;
			this.showImage();
			this.activateDot();
		}
	}
}

export default Lightbox;
