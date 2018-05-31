import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");
    this.mobileMenu = $(".mobile-menu");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.mobileMenu.toggleClass('mobile-menu--is-visible');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
  
}

export default MobileMenu;