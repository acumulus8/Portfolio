import "./../styles/styles.scss";
import "lazysizes";

import StickyHeader from "./modules/StickyHeader";
import FormValidate from "./modules/FormValidate";
import HideHeader from "./modules/HideHeader";
// import ImageCarousel from "./modules/ImageCarousel";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";
import MobileMenu from "./modules/MobileMenu";
import Lightbox from "./modules/Lightbox";
import BackgroundHeight from "./modules/BackgroundHeight";
import ProjectShade from "./modules/ProjectShade";

function onPageLoaded() {
	new StickyHeader();
	// ! add back in when there's time to fix it
	// new HideHeader();
	new BackgroundHeight();
	if (document.body.style.width < "960px") {
		new MobileMenu();
	}
	loadJSonUrlChange();
}

function loadAboutPageJS() {
	new Lightbox(
		document.getElementsByClassName("js-lightbox")[0],
		document.getElementsByClassName("js-certs-btn")[0],
		document.getElementsByClassName("js-x-cert")[0],
		"lightbox--is-visible"
	);
	new Lightbox(
		document.getElementsByClassName("js-resume")[0],
		document.getElementsByClassName("js-resume-btn")[0],
		document.getElementsByClassName("js-x-resume")[0],
		"resume--is-visible"
	);
	new SmoothScroll(document.getElementById("my-story-link"));
	// ! add back in when there's time to fix it and we have new images
	// new ImageCarousel();
}

function loadPortfolioPageJS() {
	const allShadedArticles = document.querySelectorAll(".project--professional");
	const allShades = document.querySelectorAll(".project--professional__shade");
	const allShowShadeButtons = document.querySelectorAll("#show-shade-btn");
	const allHideShadeButtons = document.querySelectorAll("#hide-shade-btn");

	new SmoothScroll(document.getElementById("side-projects-link"));

	let shadeButtonGroups = [];
	for (let i = 0; i < allShades.length; i++) {
		shadeButtonGroups.push({
			shade: allShades[i],
			showShadeBtn: allShowShadeButtons[i],
			hideShadeBtn: allHideShadeButtons[i],
			shadedArticle: allShadedArticles[i],
		});
		new SmoothScroll(allShowShadeButtons[i]);
		// new SmoothScroll(document.getElementById(`${allShowShadeButtons[i].getAttribute("id")}`));
	}

	shadeButtonGroups.forEach((group) => {
		new ProjectShade(group.shade, group.showShadeBtn, group.hideShadeBtn, group.shadedArticle);
	});

	new Lightbox(
		document.getElementsByClassName("js-lightbox")[0],
		document.getElementsByClassName("js-certs-btn")[0],
		document.getElementsByClassName("js-x-cert")[0],
		"lightbox--is-visible"
	);
	new Lightbox(
		document.getElementsByClassName("js-resume")[0],
		document.getElementsByClassName("js-resume-btn")[0],
		document.getElementsByClassName("js-x-resume")[0],
		"resume--is-visible"
	);
}

function loadJSonUrlChange() {
	const currentURL = window.location.href;
	const isIndexPage =
		currentURL.includes("index") ||
		currentURL.endsWith("/") ||
		currentURL.endsWith(".com") ||
		(!currentURL.includes("about") && !currentURL.includes("portfolio") && !currentURL.includes("contact"));
	if (isIndexPage) {
		new SmoothScroll(document.getElementById("hero-arrow-down-link"));
	}
	if (currentURL.includes("about")) {
		loadAboutPageJS();
	}
	if (currentURL.includes("portfolio")) {
		loadPortfolioPageJS();
	}
	if (currentURL.includes("contact")) {
		new FormValidate();
	}
	if (currentURL.includes("thank-you")) {
		const elToReveal = document.getElementsByClassName("thank-you")[0];
		new RevealOnScroll(elToReveal, "80%", "float-in", "float-in--is-visible");
	}
}

if (module.hot) {
	module.hot.accept();
}

window.onload = onPageLoaded;
