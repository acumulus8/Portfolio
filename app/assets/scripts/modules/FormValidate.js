import $ from 'jquery';

class FormValidate {
    constructor() {
        this.form = $('#contact-form');
        this.name = $('#name');
        this.email = $('#email');
        this.message = $('#message');
        this.button = $('#button');
        this.error = $('#error');
        this.validateForm();
    }

    validateForm() {
        const that = this;
        this.form.keyup(function() {
            if (that.email.val() !== '' && that.name.val() !== '' && that.message.val() !== '') {
                that.button.addClass('button--contact-form--is-validated');
                that.error.addClass('contact-form__error--is-hidden');
            } else {
                that.button.removeClass('button--contact-form--is-validated');
                that.error.removeClass('contact-form__error--is-hidden');
            }
        });
    }
};

export default FormValidate;