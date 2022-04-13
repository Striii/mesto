const ActionEditBtn = document.querySelector('.profile__btn-edit');
const ActionAddCard = document.querySelector('.profile__btn-add')
const openModalWindowСommon = document.querySelector('.popup');
const modalWindowName = document.querySelector('.popup_type_name');
const modalWindowAdd = document.querySelector('.popup_type_add');
const modalWindowScreen = document.querySelector('.popup_type_screen');
const CloseBtnProfileName = modalWindowName.querySelector('.popup__btn-close');
const CloseBtncard = modalWindowAdd.querySelector('.popup__btn-close');
const popupUserName = document.querySelector('.profile__name');
const popupUserHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popup__input_field_name');
const nameHobby = document.querySelector('.popup__input_field_hobby');
const myForm = document.querySelector('.popup__form');
const fieldMesto = document.querySelector('.popup__input_field_mesto');
const fieldImg = document.querySelector('.popup__input_field_img');



function openModalWindow(openModalWindowСommon) {
    openModalWindowСommon.classList.add('popup_opened')
}

ActionEditBtn.addEventListener('click', () => {
    nameInput.value = popupUserName.textContent;
    nameHobby.value = popupUserHobby.textContent;
    openModalWindow(modalWindowName)
});

ActionAddCard.addEventListener('click', () => {
    openModalWindow(modalWindowAdd)
});

function closeModalWindow(closeModalWindowСommon) {
    closeModalWindowСommon.classList.remove('popup_opened');
}

CloseBtnProfileName.addEventListener('click', () => {
    closeModalWindow(modalWindowName)
});

CloseBtncard.addEventListener('click', () => {
    closeModalWindow(modalWindowAdd)
});

function inputPopupUserName(event) {
    event.preventDefault();
    popupUserName.textContent = nameInput.value;
    popupUserHobby.textContent = nameHobby.value;
    closeModalWindow(modalWindowName)
}

myForm.addEventListener('submit', inputPopupUserName);









const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const listContainer = document.querySelector('.grid__wrap');
const template = document.querySelector('.template-card');


function render() {
    const html = initialCards.map(getElement);
    listContainer.append(...html);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const title = getElementTemplate.querySelector('.card__title');
    const cardImages = getElementTemplate.querySelector('.card__img');
    console.log(item.link);
    cardImages.src = item.link;
    cardImages.alt = item.name;
    title.textContent = item.name;

    return getElementTemplate;
}

render();

const ActionAddBtn = document.querySelector('.profile__btn-add');


function inputPopupAddCard() {
    // cardImages.src = fieldImg.value;
    // cardImages.alt = fieldMesto.value;
    // title.textContent = fieldMesto.value;
    modalWindow.classList.add('popup__opened_add');
}

ActionAddBtn.addEventListener('click', inputPopupAddCard);


// function openModalWindow() {
//   nameInput.value = popupUserName.textContent;
//   nameHobby.value = popupUserHobby.textContent;
//   modalWindow.classList.add('popup_opened');
// }

// function closeModalWindow() {
//   modalWindow.classList.remove('popup_opened');
// }

// function inputPopupUserName(event) {
//   event.preventDefault();
//   popupUserName.textContent = nameInput.value;
//   popupUserHobby.textContent = nameHobby.value;
//   closeModalWindow()
// }

// ActionEditBtn.addEventListener('click', openModalWindow);
// ModalCloseBtn.addEventListener('click', closeModalWindow);
// myForm.addEventListener('submit', inputPopupUserName);