const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: '.popup__input-error_active'
};



export const disableButton = (button) => {
    button.classList.add(validationConfig.inactiveButtonClass);
    button.setAttribute('disabled', 'disabled');
};

const removeButton = (button) => {
    button.classList.remove(validationConfig.inactiveButtonClass);
    button.removeAttribute('disabled');
}



function toggleButtonState(inputs, button) {
    const hasErrors = inputs.some(input => !input.validity.valid);
    if (hasErrors) {
        disableButton(button);
    } else {
        removeButton(button);
    }
}

function validateInput(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    if (!input.validity.valid) {
        input.classList.add(config.inputErrorClass)
        input.classList.add(config.errorClass)
        error.textContent = input.validationMessage
    } else {
        input.classList.remove(config.inputErrorClass)
        input.classList.remove(config.errorClass)
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
        sethandlers(form, config);
    })
}



enableValidation(validationConfig)