const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__btn-save',
    inactiveButtonClass: 'popup__btn-disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: '.popup__input-error_active'
};

function disableButton(submitButtonSelector, config) {
    submitButtonSelector.classList.add(config.inactiveButtonClass)
    submitButtonSelector.setAttribute('disabled', 'disabled');
};

function removeButton(submitButtonSelector, config) {
    submitButtonSelector.classList.remove(config.inactiveButtonClass)
    submitButtonSelector.removeAttribute('disabled');
}



function toggleButtonState(inputSelector, submitButtonSelector, config) {
    const hasErrors = inputSelector.some(inputSelector => !inputSelector.validity.valid);
    if (hasErrors) {
        disableButton(submitButtonSelector, config);
    } else {
        removeButton(submitButtonSelector, config);
    }
}

function validateInput(formSelector, inputSelector, config) {
    const error = formSelector.querySelector(`#${inputSelector.id}-error`);
    if (!inputSelector.validity.valid) {
        inputSelector.classList.add(config.inputErrorClass)
        inputSelector.classList.add(config.errorClass)
        error.textContent = inputSelector.validationMessage
    } else {
        inputSelector.classList.remove(config.inputErrorClass)
        inputSelector.classList.remove(config.errorClass)
        error.textContent = ''
    }
}

function sethandlers(formSelector, config) {
    const inputs = Array.from(formSelector.querySelectorAll(config.inputSelector));
    const button = formSelector.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, button, config);
    inputs.forEach((inputSelector) => {
        inputSelector.addEventListener('input', () => {
            validateInput(formSelector, inputSelector, config)
            toggleButtonState(inputs, button, config)
        })
    });
}

function enableValidation(config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector))
    forms.forEach((formSelector) => {
        sethandlers(formSelector, config);
    })
}

enableValidation(validationConfig)