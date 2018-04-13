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
        this.inputErrorHighlight();
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

            if (that.email.val() !== '') {
                that.email.removeClass('contact-form--error-highlight');
            };

            if (that.name.val() !== '') {
                that.name.removeClass('contact-form--error-highlight');
            }; 

            if (that.message.val() !== '') {
                that.message.removeClass('contact-form--error-highlight');
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

    //refactor into mulitple if statements
    inputErrorHighlight() {
        const that = this;
        this.button.click(function() {
            if (that.email.val() == '') {
                that.email.addClass('contact-form--error-highlight');
            };

            if (that.name.val() == '') {
                that.name.addClass('contact-form--error-highlight');
            }; 

            if (that.message.val() == '') {
                that.message.addClass('contact-form--error-highlight');
            };
        });
    }
};

export default FormValidate;