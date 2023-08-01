class BackgroundHeight {
	constructor() {
		this.siteHeader = document.querySelector(".site-header");
		this.pageContent = document.querySelector("main");
		this.secondaryNav = document.querySelector(".secondary-nav");
		this.gradientBackground = document.querySelector(".page-background");
		this.subBackground = document.querySelector(".page-background__sub-bg");
		this.pageHeaderHeight = 177;

		if (!window.location.href.includes("index")) {
			this.adjustSubBackgroundHeight();
			this.adjustBackgroundsTopOffset();
			this.waitForImagesToLoad();
		}
	}

	waitForImagesToLoad() {
		const images = this.pageContent.querySelectorAll("img");

		const onImageLoad = () => {
			this.adjustSubBackgroundHeight();
			this.adjustBackgroundsTopOffset();
		};

		images.forEach((image) => {
			if (image.hasAttribute("height")) {
				onImageLoad();
			} else {
				image.addEventListener("load", onImageLoad);
			}
		});
	}

	adjustSubBackgroundHeight() {
		let newHeight = this.pageContent.offsetHeight - this.gradientBackground.offsetHeight;
		if (!!this.secondaryNav) {
			newHeight += this.secondaryNav.offsetHeight;
		}
		this.subBackground.style.height = `${newHeight}px`;
	}

	adjustBackgroundsTopOffset() {
		let gradientOffset = this.siteHeader.offsetHeight + this.pageHeaderHeight;
		let subOffset = this.siteHeader.offsetHeight + this.pageHeaderHeight + this.gradientBackground.offsetHeight;

		if (this.secondaryNav) {
			gradientOffset += this.secondaryNav?.offsetHeight;
			subOffset += this.secondaryNav?.offsetHeight;
		}

		this.gradientBackground.style.top = `${gradientOffset}px`;
		this.subBackground.style.top = `${subOffset}px`;
	}
}

export default BackgroundHeight;
