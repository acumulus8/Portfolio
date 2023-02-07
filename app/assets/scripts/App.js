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

function onPageLoaded() {
	observeUrlChange();
	new StickyHeader();
	new HideHeader();
	new MobileMenu();
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
	new ImageCarousel();
	new RevealOnScroll($(".skills__figure"), "80%", "float-in", "float-in--is-visible");
	new RevealOnScroll($(".thank-you"), "80%", "float-in", "float-in--is-visible");
	new SmoothScroll($(".arrow-down-link"));
	new SmoothScroll($(".secondary-nav a"));

	console.log("hey dawg");
}

function observeUrlChange() {
	console.log("####observing url change!");
	const oldHref = document.location.href;
	const body = document.querySelector("body");
	const observer = new MutationObserver((mutations) => {
		mutations.forEach(() => {
			if (oldHref !== document.location.href) {
				oldHref = document.location.href;
				console.log("####url changed!");
			}
		});
	});
	observer.observe(body, { childList: true, subtree: true });
}

window.onload = onPageLoaded;

if (module.hot) {
	module.hot.accept();
}
