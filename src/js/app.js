const cerrar = document.querySelector('.close')
const abrir = document.querySelector('.btn-modal')
const modal = document.querySelector('.modal')
const modalC = document.querySelector('.modal-container')
const movetop = document.querySelector('#movetop')
abrir.addEventListener("click", () => {
  modalC.style.opacity = '1'
  modalC.style.visibility = 'visible'
  modal.classList.toggle('modal-close');
})
cerrar.addEventListener('click', (e) => {
  // e.preventDefault();
  modal.classList.toggle('modal-close');
  setTimeout(() => {
    modalC.style.opacity = '0'
    modalC.style.visibility = 'hidden'
  }, 700);
})
window.addEventListener('click', (e) => {
  if (e.target == modalC) {
    modal.classList.toggle('modal-close');
    setTimeout(() => {
      modalC.style.opacity = '0'
      modalC.style.visibility = 'hidden'
    }, 100);
    e.stopPropagation();
  }

})
movetop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

})
window.onscroll = function() {
  let y = window.scrollY
  if (document.querySelector('.moveUp')) {
    if (y > 100) {
      document.querySelector('.moveUp').classList.remove('none')
    } else {
      document.querySelector('.moveUp').classList.add('none')
    }
  }

}

// window.onload = () => {
//   if ($('#preloader').length) {
//     $('#preloader').delay(100).fadeOut('slow', function() {
//       $(this).remove();
//     })
//   }
// }