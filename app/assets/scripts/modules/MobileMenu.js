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
		this.mobileMenu.classList.toggle("mobile-menu--is-visible");
		this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;
