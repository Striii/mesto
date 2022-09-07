const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
};


function disableButton(button, config) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled')
}

function removeButton(button, config) {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute('disabled');
}


function toggleButtonState(inputs, button, config) {
    const hasErrors = inputs.some(input => !input.validity.valid);
    if (hasErrors) {
        disableButton(button, config);
    } else {
        removeButton(button, config);
    }
}

function validateInput(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
        input.classList.add(config.inputErrorClass)
        error.textContent = input.validationMessage
    } else {
        input.classList.remove(config.inputErrorClass)
        error.textContent = ''
    }
}

function sethandlers(form, config) {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, button, config);
    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            validateInput(form, input, config)
            toggleButtonState(inputs, button, config)
        })
    });
}

function enableValidation(config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector))
    forms.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        sethandlers(form, config);
    })
}



enableValidation(validationConfig)