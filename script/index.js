const ActionEditBtn = document.querySelector('.profile__btn-edit');
const modalWindow = document.querySelector('.popup');
const ModalCloseBtn = modalWindow.querySelector('.popup__btn-close');
const popupUserName = document.querySelector('.profile__name');
const popupUserHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popup__input_field_name');
const nameHobby = document.querySelector('.popup__input_field_hobby');
const myForm = document.querySelector('.popup__form');

function openModalWindow() {
    nameInput.value = popupUserName.textContent;
    nameHobby.value = popupUserHobby.textContent;
    modalWindow.classList.add('popup_opened');
}

function closeModalWindow() {
    modalWindow.classList.remove('popup_opened');
}

function inputPopupUserName(event) {
    event.preventDefault();
    popupUserName.textContent = nameInput.value;
    popupUserHobby.textContent = nameHobby.value;
    closeModalWindow()
}

ActionEditBtn.addEventListener('click', openModalWindow);
ModalCloseBtn.addEventListener('click', closeModalWindow);
myForm.addEventListener('submit', inputPopupUserName);