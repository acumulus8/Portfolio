class FormValidate {
	constructor() {
		this.form = document.getElementById("contact-form");
		this.name = document.getElementById("name");
		this.email = document.getElementById("email");
		this.emailErrorLabel = document.getElementById("email-error-label");
		this.message = document.getElementById("message");
		this.button = document.getElementById("contact-submit-button");
		this.error = document.getElementById("error");
		this.checkmark = document.getElementById("checkmark");
		this.emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
		this.buttonValidClass = "button--contact-form--is-validated";
		this.showCheckMarkClass = "contact-form__checkmark--is-visible";
		this.highlightErrorClass = "contact-form--error-highlight";
		this.hideErrorMsgClass = "contact-form__error--is-hidden";
		this.handleInputErrorHighlight = this.handleInputErrorHighlight.bind(this);
		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.checkWholeForm = this.checkWholeForm.bind(this);

		this.events();
	}

	events() {
		this.button.addEventListener("click", this.handleButtonClick);
		this.email.addEventListener("blur", this.handleInputErrorHighlight);
		this.email.addEventListener("keyup", this.handleInputErrorHighlight);
		this.name.addEventListener("blur", this.handleInputErrorHighlight);
		this.name.addEventListener("keyup", this.handleInputErrorHighlight);
		this.message.addEventListener("blur", this.handleInputErrorHighlight);
		this.message.addEventListener("keyup", this.handleInputErrorHighlight);
	}

	formUiAction = {
		highlightInput: (input) => this[input].classList.add(this.highlightErrorClass),
		unHighlightInput: (input) => this[input].classList.remove(this.highlightErrorClass),
		showEmailErrorLabel: () => this.emailErrorLabel.classList.remove(this.hideErrorMsgClass),
		hideEmailErrorLabel: () => this.emailErrorLabel.classList.add(this.hideErrorMsgClass),
		disableButton: () => {
			this.button.classList.remove(this.buttonValidClass);
			this.button.removeAttribute("type", "submit");
			this.error.classList.remove(this.hideErrorMsgClass);
			this.checkmark.classList.remove(this.showCheckMarkClass);
		},
		enableButton: () => {
			this.button.classList.add(this.buttonValidClass);
			this.button.setAttribute("type", "submit");
			this.error.classList.add(this.hideErrorMsgClass);
			this.checkmark.classList.add(this.showCheckMarkClass);
		},
	};

	checkWholeForm() {
		if (this.email.value == "" || this.name.value == "" || this.message.value == "" || !this.emailRegex.test(this.email.value)) {
			this.formUiAction.disableButton();
		} else {
			this.formUiAction.enableButton();
		}
	}

	handleButtonClick() {
		if (this.email.value == "") this.formUiAction.highlightInput("email");
		if (!this.emailRegex.test(this.email.value)) {
			this.formUiAction.showEmailErrorLabel();
			this.formUiAction.highlightInput("email");
		}
		if (this.name.value == "") this.formUiAction.highlightInput("name");
		if (this.message.value == "") this.formUiAction.highlightInput("message");
		this.checkWholeForm();
	}

	handleInputErrorHighlight(e) {
		const input = e.target.id;

		if (this[input].value == "") {
			this.formUiAction.highlightInput(input);
			if (input === "email" && !this.emailRegex.test(this.email.value)) this.formUiAction.showEmailErrorLabel();
		} else {
			this.formUiAction.unHighlightInput(input);
			if (input === "email") {
				if (this.emailRegex.test(this.email.value)) {
					this.formUiAction.unHighlightInput("email");
					this.formUiAction.hideEmailErrorLabel();
				} else {
					this.formUiAction.highlightInput("email");
					this.formUiAction.showEmailErrorLabel();
				}
			}
			this.checkWholeForm();
		}
	}
}

export default FormValidate;
