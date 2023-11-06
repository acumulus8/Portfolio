class MobileMenu {
	constructor() {
		this.menuIcon = document.getElementsByClassName("site-header__menu-icon")[0];
		this.mobileMenu = document.getElementsByClassName("mobile-menu")[0];
		this.events();
	}

	events() {
		this.menuIcon.addEventListener("click", this.toggleMenu.bind(this));
	}

	toggleMenu() {
		this.mobileMenu.toggleClass("mobile-menu--is-visible");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;
