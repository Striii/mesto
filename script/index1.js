const ActionEditBtn = document.querySelector('.profile__btn-edit');
const ActionAddCard = document.querySelector('.profile__btn-add')


const modalWindowName = document.querySelector('.popup_type_name');
const modalWindowAdd = document.querySelector('.popup_type_add');
const modalWindowScreen = document.querySelector('.popup_type_screen');
const openModalWindowСommon = document.querySelector('.popup');




function openModalWindow(openModalWindowСommon) {
    openModalWindowСommon.classList.add('popup_opened')
}

ActionEditBtn.addEventListener('click', () => {
    openModalWindow(modalWindowName)
});
ActionAddCard.addEventListener('click', () => {
    openModalWindow(modalWindowAdd)
});

modalWindowScreen.addEventListener('click', () => {
    openModalWindow(modalWindowAdd.classList.add('popup_type_screen'))
})


ModalCloseBtn.addEventListener('click', closeModalWindow);
// myForm.addEventListener('submit', inputPopupUserName);