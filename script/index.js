const actionEditBtn = document.querySelector('.profile__btn-edit');
const actionAddCard = document.querySelector('.profile__btn-add')
const popup = document.querySelector('.popup');
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

function deleteCard(e) {
    const card = e.target.closest('.card');
    card.remove();
};

function handleAddCard(e) {
    e.preventDefault();
    listContainer.prepend(getElement(({ name: inputNameMesto.value, link: inputFiledImg.value })));
    closePopup(modalWindowAdd);
    openMyFormAddCard.reset();
}

function likeCard(e) {
    e.target.classList.toggle('card__btn-like_activ');
}

renderCard();

const handleEscUp = (event) => {
    event.preventDefault();
    const activePopup = document.querySelector('.popup_opened');
    if (event.key === 'Escape') {
        closePopup(activePopup);
    };
};

function openPopup(popup) {
    document.addEventListener('keydown', handleEscUp); // 
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    document.removeEventListener('keydown', handleEscUp); // 
    popup.classList.remove('popup_opened');
}


function openPopupUserName(event) {
    event.preventDefault();
    popupUserName.textContent = nameInput.value;
    popupUserHobby.textContent = nameHobby.value;
    closePopup(modalWindowName);
}



const popupClose = document.querySelectorAll('.popup__btn-close');
if (popupClose.length > 0) {
    for (let index = 0; index < popupClose.length; index++) {
        const element = popupClose[index];
        element.addEventListener('click', function(event) {
            closePopup(element.closest('.popup'));
        });
    }
}









actionEditBtn.addEventListener('click', () => {
    nameInput.value = popupUserName.textContent;
    nameHobby.value = popupUserHobby.textContent;
    openPopup(modalWindowName)
});

actionAddCard.addEventListener('click', () => {
    openPopup(modalWindowAdd)
});


openMyFormAddCard.addEventListener('submit', handleAddCard);
openMyForm.addEventListener('submit', openPopupUserName);