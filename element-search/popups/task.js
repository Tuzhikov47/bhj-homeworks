const modal = document.getElementById('modal_main');
modal.classList.add('modal_active');

const modalButtons = document.getElementsByClassName('modal__close');
const closeButton = modalButtons.item(0);
const successButton =  modalButtons.item(1);
const successModalClose = modalButtons.item(2);
const success = document.getElementById('modal_success');

const modalClose = function() {
    modal.classList.remove('modal_active');
};
const modalAcept = function() {
    modalClose();
    success.classList.add('modal_active');
    return false;
};
closeButton.onclick = modalClose;
successButton.onclick = modalAcept;

const successModal = function(){
    success.classList.remove('modal_active');
    return false;
};
const successButtonColor = document.getElementsByClassName('btn_success').item(0);
successModalClose.onclick = successModal;
successButtonColor.onclick = successModal;