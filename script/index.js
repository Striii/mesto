const actionEditBtn = document.querySelector('.profile__btn-edit');
const actionAddCard = document.querySelector('.profile__btn-add')
const modalWindowName = document.querySelector('.popup_type_name');
const modalWindowAdd = document.querySelector('.popup_type_add');
const modalWindowScreen = document.querySelector('.popup_type_screen');
const popupUserName = document.querySelector('.profile__name');
const popupUserHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popup__input_field_name');
const nameHobby = document.querySelector('.popup__input_field_hobby');
const openMyForm = document.querySelector('.popup__form');
const popupFullScreen = document.querySelector('.popup__img-fuul');
const popupFullScreenSign = document.querySelector('.popup__sign');
const listContainer = document.querySelector('.grid__wrap');
const template = document.querySelector('.template-card');
const openMyFormAddCard = document.querySelector('.popup__form_card');
const inputNameMesto = document.querySelector('.popup__input_field_mesto');
const inputFiledImg = document.querySelector('.popup__input_field_img');
const buttonDisable = modalWindowAdd.querySelector('.popup__btn-save');
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




function renderCard() {
    const html = initialCards.map(getElement);
    listContainer.append(...html);
}

function getElement(item) {
    const getElementTemplate = template.content.cloneNode(true);
    const name = getElementTemplate.querySelector('.card__title');
    const link = getElementTemplate.querySelector('.card__img');
    const buttonDeleteCard = getElementTemplate.querySelector('.card__btn-del');
    const buttonLike = getElementTemplate.querySelector('.card__btn-like');
    name.textContent = item.name;
    link.src = item.link;
    link.alt = item.name;
    buttonDeleteCard.addEventListener('click', deleteCard);
    buttonLike.addEventListener('click', likeCard);
    link.addEventListener('click', () => {
        openPopup(modalWindowScreen);
        popupFullScreen.src = item.link;
        popupFullScreen.alt = item.name;
        popupFullScreenSign.textContent = item.name;
    });
    return getElementTemplate;
}

function deleteCard(evt) {
    const card = evt.target.closest('.card');
    card.remove();
};

function handleAddCard(evt) {
    evt.preventDefault();
    listContainer.prepend(getElement(({ name: inputNameMesto.value, link: inputFiledImg.value })));
    closePopup(modalWindowAdd);
}

function likeCard(evt) {
    evt.target.classList.toggle('card__btn-like_activ');
}

renderCard();

const handleEscUp = (evt) => {
    if (evt.key === 'Escape') {
        const activepopup = document.querySelector('.popup_opened')
        closePopup(activepopup);
    };
};

const clikOverlayClosePopup = (evt) => {
    if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__btn-close')) {
        closePopup(evt.currentTarget);
    };
}

function openPopup(popup) {
    document.addEventListener('keydown', handleEscUp);
    popup.addEventListener('click', clikOverlayClosePopup)
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    document.removeEventListener('keydown', handleEscUp);
    popup.removeEventListener('click', clikOverlayClosePopup)
    popup.classList.remove('popup_opened');
}


function openPopupUserName(evt) {
    evt.preventDefault();
    popupUserName.textContent = nameInput.value;
    popupUserHobby.textContent = nameHobby.value;
    closePopup(modalWindowName);
}

actionEditBtn.addEventListener('click', () => {
    nameInput.value = popupUserName.textContent;
    nameHobby.value = popupUserHobby.textContent;
    openPopup(modalWindowName)
});

actionAddCard.addEventListener('click', () => {
    openPopup(modalWindowAdd);
    disableButton(buttonDisable, validationConfig);
    openMyFormAddCard.reset();
});


openMyFormAddCard.addEventListener('submit', handleAddCard);
openMyForm.addEventListener('submit', openPopupUserName);