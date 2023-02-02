class Lightbox {
	constructor(boxToOpen, openBtn, closeBtn, classToToggle) {
		this.lightbox = boxToOpen;
		this.classToToggle = classToToggle;
		this.images = document.querySelectorAll(".lightbox__img-container__image");
		this.openBtn = openBtn;
		this.xBtn = closeBtn;
		this.prev = document.getElementById("#js-prev");
		this.next = document.getElementById("#js-next");
		this.showClass = "lightbox__img-container__image--visible";
		this.hideClass = "lightbox__img-container__image--hide";
		this.dots = document.querySelectorAll(".lightbox__img-container__dot-box__dot");
		this.i = 0;
		this.events();
	}

	events() {
		this.openLightbox();
		this.closeLightbox();
		this.changeImage();
		// $(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeLightbox();
		}
	}

	openLightbox() {
		const that = this;
		this.openBtn.on("click", (e) => {
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

	changeImage() {
		this.defaultDisplay();
		const that = this;

		this.next.on("click", () => {
			this.hideImage();
			that.deactivateDot();
			if (this.i < this.images.length - 1) {
				this.i++;
				this.showImage();
				that.activateDot();
			} else {
				this.i = 0;
				this.showImage();
				that.activateDot();
			}
		});

		this.prev.on("click", () => {
			this.hideImage();
			that.deactivateDot();
			if (this.i > 0) {
				this.i--;
				this.showImage();
				that.activateDot();
			} else if (this.i == 0) {
				this.i = this.images.length - 1;
				this.showImage();
				that.activateDot();
			}
		});
	}
}

export default Lightbox;
