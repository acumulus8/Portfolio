import $ from 'jquery';

class ContactForm {
    constructor() {
        this.alert = $('#alert');
        this.form = $('#contact-form');
        this.name = $('#name');
        this.email = $('#emial');
        this.message = $('#message');
        this.button = $('.button');
        this.showError();
    }

    showError() {
        if (this.name.value && this.email.value && this.message.value) {
            this.button.toggleClass('btn btn-primary button--is-visible');
            console.log('This is working');
        }
    }
};

export default ContactForm;

