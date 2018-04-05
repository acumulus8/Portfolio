import $ from 'jquery';

class ContactForm {
    constructor() {
        this.alert = $('#alert');
        this.form = $('#contact-form');
        this.name = $('#name').val().length;
        this.email = $('#emial').val();
        this.message = $('#message').val().length;
        this.button = $('#button');
        this.showButton();
    }

    showButton() {
        if (this.name > 10) {
            this.button.addClass('button--is-visible');
            console.log(this.name);
        } else {
            console.log('not working :(')
        }
    }

    addClass() {
        
    }

    
}

export default ContactForm;

