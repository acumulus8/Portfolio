import $ from 'jquery';

class FormValidate {
    constructor() {
        this.form = $('#contact-form');
        this.name = $('#name');
        this.email = $('#email');
        this.message = $('#message');
        this.button = $('#button');
        this.buttonContainer = $('a');
        this.error = $('#error');
        this.validateForm();
        this.errorMessage();
    }

    validateForm() {
        const that = this;
        this.form.keyup(function() {
            if (that.email.val() !== '' && that.name.val() !== '' && that.message.val() !== '') {
                that.button.addClass('button--contact-form--is-validated');
                that.error.addClass('contact-form__error--is-hidden');
                that.button.attr('type', 'submit');
            } else {
                that.button.removeClass('button--contact-form--is-validated');
                that.button.removeAttr('type', 'submit');
            };
        });
    }

    errorMessage() {
        const that = this;
        this.button.click(function() {
            if (that.email.val() == '' || that.name.val() == '' || that.message.val() == '') {
                that.error.removeClass('contact-form__error--is-hidden');
            } else {
                that.error.addClass('contact-form__error--is-hidden');
            }
        });
    }
};

export default FormValidate;