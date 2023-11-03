class SmoothScroll {
	constructor(link) {
		this.link = link;
		this.addSmoothScroll();
	}

	addSmoothScroll() {
		this.link.addEventListener("click", (event) => {
			event.preventDefault();
			const targetId = this.link.getAttribute("href");
			const targetElement = document.querySelector(targetId);
			targetElement.scrollIntoView({ behavior: "smooth" });
		});
	}
}

export default SmoothScroll;
