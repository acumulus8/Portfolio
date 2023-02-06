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
	new FormValidate();
	new StickyHeader();
	new HideHeader();
	new ImageCarousel();
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

	//new RevealOnScroll($('.intro__content-container__content'), "80%", "slide-left", "slide-left--is-visible" );
	new RevealOnScroll($(".skills__figure"), "80%", "float-in", "float-in--is-visible");
	new RevealOnScroll($(".thank-you"), "80%", "float-in", "float-in--is-visible");
	//new RevealOnScroll($(".icon-container"), "70%", "grow", "grow--is-visible");

	new SmoothScroll($(".arrow-down-link"));
	new SmoothScroll($(".secondary-nav a"));

	console.log("hey dawg");
}

document.addEventListener("DOMContentLoaded", onPageLoaded);

if (module.hot) {
	module.hot.accept();
}
