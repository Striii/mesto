const ActionEditBtn = document.querySelector('.btn_action_edit');
const modalWindow = document.querySelector('.popap');
const ModalCloseBtn = modalWindow.querySelector('.btn_action_close');
const popapUserName = document.querySelector('.profile__name');
const popapUserHobby = document.querySelector('.profile__hobby');
const nameInput = document.querySelector('.popap__name');
const nameHobby = document.querySelector('.popap__hobby');
const myForm = document.querySelector('.popap__form');

function toggleModalWindow() {
    nameInput.value = popapUserName.textContent;
    nameHobby.value = popapUserHobby.textContent;
    modalWindow.classList.toggle('popap_is_activ');
}

function onOverlayClick(event) {
    if (event.target === event.currentTarget) {
        toggleModalWindow();
    }
}

ActionEditBtn.addEventListener('click', toggleModalWindow);
ModalCloseBtn.addEventListener('click', toggleModalWindow);
modalWindow.addEventListener('click', onOverlayClick);

function inputPopapUserName(event) {
    event.preventDefault();
    popapUserName.textContent = nameInput.value;
    popapUserHobby.textContent = nameHobby.value;
    toggleModalWindow();
}

myForm.addEventListener('submit', inputPopapUserName);


// let LikeWindow = document.querySelector('.grid__like'); //нужен счетчик, посмотреть какая реализация, при 1 лайк, при 0 дизлайк или тру фолс, а еще на разные карточки, пока работает на одну, значит не верная логика
// LikeWindow = false;

// function toggleLike() {
// if {LikeWindow = false} 
// else LikeWindow.classList.toggle('grid__like_activ');
// }

// LikeWindow.addEventListener('click', toggleLike);