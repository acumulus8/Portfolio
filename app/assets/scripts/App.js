import "./../styles/styles.scss";
import "lazysizes";

import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import FormValidate from "./modules/FormValidate";
import HideHeader from "./modules/HideHeader";
import ImageCarousel from "./modules/ImageCarousel";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";
import MobileMenu from "./modules/MobileMenu";
import Lightbox from "./modules/Lightbox";
import BackgroundHeight from "./modules/BackgroundHeight";

function onPageLoaded() {
	new StickyHeader();
	new HideHeader();
	new MobileMenu();
	new BackgroundHeight();
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
	new SmoothScroll($(".secondary-nav a"));
	new ImageCarousel();
}

function loadPortfolioPageJS() {
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
	if (currentURL.includes("index")) {
		new SmoothScroll($(".arrow-down-link"));
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
		new RevealOnScroll($(".thank-you"), "80%", "float-in", "float-in--is-visible");
	}
}

if (module.hot) {
	module.hot.accept();
}
window.onload = onPageLoaded;
