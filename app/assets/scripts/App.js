import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";
import FormValidate from "./modules/FormValidate";
import HideHeader from "./modules/HideHeader";
import ImageCarousel from "./modules/ImageCarousel";
import RevealOnScroll from "./modules/RevealOnScroll";
import SmoothScroll from "./modules/SmoothScroll";
import MobileMenu from "./modules/MobileMenu";

//new HeroParallax();
new FormValidate();
new StickyHeader();
new HideHeader();
new ImageCarousel();
new MobileMenu();

new SmoothScroll($(".arrow-down-link"));
new SmoothScroll($(".secondary-nav a"));

//new RevealOnScroll($('.intro__content-container__content'), "80%", "slide-left", "slide-left--is-visible" );
new RevealOnScroll(
    $(".skills__figure"),
    "80%",
    "float-in",
    "float-in--is-visible"
);
new RevealOnScroll($(".thank-you"), "80%", "float-in", "float-in--is-visible");
//new RevealOnScroll($(".icon-container"), "70%", "grow", "grow--is-visible");

console.log("hey dawg");
