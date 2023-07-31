class ProjectShade {
	constructor(shade, showShadeBtn, hideShadeBtn, shadedArticle) {
		this.projectShade = shade;
		this.showShadeBtn = showShadeBtn;
		this.hideShadeButton = hideShadeBtn;
		this.shadedArticle = shadedArticle;
		this.hideShade = this.hideShade.bind(this);
		this.showShade = this.showShade.bind(this);

		this.init();
	}

	init() {
		this.showShadeBtn.addEventListener("click", this.showShade);
		this.hideShadeButton.addEventListener("click", this.hideShade);
	}

	hideShade(e) {
		e.preventDefault();
		this.projectShade.classList.remove("project--professional__shade--revealed");
		this.projectShade.classList.add("project--professional__shade--hidden");
		this.shadedArticle.classList.remove("project--professional--hidden");
		this.shadedArticle.classList.add("project--professional--revealed");
		this.showShadeBtn.style.display = "block";
		this.hideShadeButton.style.display = "none";
	}

	showShade(e) {
		e.preventDefault();
		setTimeout(() => {
			this.projectShade.classList.remove("project--professional__shade--hidden");
			this.projectShade.classList.add("project--professional__shade--revealed");
			this.shadedArticle.classList.remove("project--professional--revealed");
			this.shadedArticle.classList.add("project--professional--hidden");
			this.showShadeBtn.style.display = "none";
			this.hideShadeButton.style.display = "block";
		}, 250);
	}
}

export default ProjectShade;
