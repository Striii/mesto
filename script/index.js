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
    closeModalWindow(modalWindowName);
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
const myFormAddCard = document.querySelector('.popup__form_card');
const inputNameMesto = document.querySelector('.popup__input_field_mesto');
const inputFiledImg = document.querySelector('.popup__input_field_img');

function renderCard() {
    const html = initialCards.map(getElement);
    listContainer.append(...html);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.card__title');
    const link = getElementTemplate.querySelector('.card__img');
    name.textContent = item.name;
    link.src = item.link;
    return getElementTemplate;
}

renderCard();

function handleAddCard(e) {
    e.preventDefault();
    listContainer.prepend(getElement(({ name: inputNameMesto.value, link: inputFiledImg.value })));
    closeModalWindow(modalWindowAdd);
    myFormAddCard.reset();
}

myFormAddCard.addEventListener('submit', handleAddCard);