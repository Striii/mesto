const ActionEditBtn = document.querySelector('.btn_action_edit');
const modalWindow = document.querySelector('.popap');
const ModalCloseBtn = modalWindow.querySelector('.btn_action_close');
let popapUserName = document.querySelector('.profile__name');
let popapUserHobby = document.querySelector('.profile__hobby');
let nameInput = document.querySelector('.popap__name');
let nameHobby = document.querySelector('.popap__hobby');
let myForm = document.querySelector('.popap__form');




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

function inputPopapUserName(e) {
    e.preventDefault();
    popapUserName.value = nameInput.textContent;
    popapUserHobby.value = nameHobby.textContent;
    toggleModalWindow();
    console.log(popapUserName);
}

myForm.addEventListener('submit', inputPopapUserName);


const LikeWindow = document.querySelector('.grid__like');

function toggleLike() {
    LikeWindow.classList.toggle('grid__like_activ');
}

LikeWindow.addEventListener('click', toggleLike);