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
import ProjectShade from "./modules/ProjectShade";

function onPageLoaded() {
	new StickyHeader();
	new HideHeader();
	new BackgroundHeight();
	new MobileMenu();
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
	new SmoothScroll($("#my-story-link"));
	new ImageCarousel();
}

function loadPortfolioPageJS() {
	const allShadedArticles = document.querySelectorAll(".project--professional");
	const allShades = document.querySelectorAll(".project--professional__shade");
	console.log("allShades", allShades);
	const allShowShadeButtons = document.querySelectorAll("#show-shade-btn");
	const allHideShadeButtons = document.querySelectorAll("#hide-shade-btn");

	let shadeButtonGroups = [];
	for (let i = 0; i < allShades.length; i++) {
		console.log("allShowShadeButtons[i] id", allShowShadeButtons[i].id);
		shadeButtonGroups.push({
			shade: allShades[i],
			showShadeBtn: allShowShadeButtons[i],
			hideShadeBtn: allHideShadeButtons[i],
			shadedArticle: allShadedArticles[i],
		});
		new SmoothScroll($(`#${allShowShadeButtons[i].id} a`));
		new SmoothScroll($("#side-projects-link"));
	}

	shadeButtonGroups.forEach((group) => {
		console.log(group);
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
