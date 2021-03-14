import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";

class SmoothScroll {
	constructor(link) {
		this.link = link;
		this.addSmoothScroll();
	}

	addSmoothScroll() {
		this.link.smoothScroll();
	}
}

export default SmoothScroll;
