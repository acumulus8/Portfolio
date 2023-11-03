class HideHeader {
	constructor() {
		this.window = window;
		this.siteHeader = document.getElementsByClassName("site-header");
		this.triggerElement = document.getElementById("trigger");
		this.toggleHeader();
	}

	toggleHeader() {
		const that = this;
		let didScroll;
		let lastScrollTop = 0;
		let delta = 5;
		let heroHeight = this.triggerElement.outerHeight;

		// on scroll, let the interval function know the user has scrolled
		that.window.scroll(function (event) {
			didScroll = true;
		});
		// run hasScrolled() and reset didScroll status
		setInterval(function () {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);
		function hasScrolled() {
			let st = that.window.scrollTop();
			if (Math.abs(lastScrollTop - st) <= delta) return;
			if (st > lastScrollTop && st > heroHeight) {
				// Scroll Down
				that.siteHeader.addClass("site-header--hide");
			} else {
				// Scroll Up
				if (st + $(window).height() < $(document).height()) {
					that.siteHeader.removeClass("site-header--hide");
				}
			}

			lastScrollTop = st;
		}
	}
}

export default HideHeader;
