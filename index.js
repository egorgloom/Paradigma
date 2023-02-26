const popUp = document.getElementById('pupap');
const closePopUpButton = document.getElementById('close-pupap');
const orderCall = document.getElementById('order-a-call');
const popUpDone = document.getElementById('pupapDone');
const formElement = document.getElementById('form');

const phone = document.getElementById('input-phone')

const form = {
    phone: document.getElementById('input-phone'),
    button: document.getElementById('button-phone'),
    checkbox: document.getElementById('input-chekbox')
}

orderCall.onclick = (e) => {
    e.stopPropagation();
    popUp.classList.add('active');
}

popUp.onclick = (e) => {
    e.stopPropagation();
}

formElement.onsubmit = (e) => {
    e.preventDefault();
    let isValid = form.phone.value.length >= 6 && form.checkbox.checked;

    if (isValid) {
        popUp.classList.remove('active');
        popUpDone.classList.add('active');
    }
}

function closePopUp() {
    form.phone.value = '';
    form.checkbox.checked = true;
    popUp.classList.remove('active');
}

closePopUpButton.onclick = closePopUp

document.onclick = () => {
    closePopUp()
    popUpDone.classList.remove('active');
}


/******************* */
const element = document.getElementById('input-phone');
const maskOptions = {
    mask: '+{7}(000)000-00-00',
    lazy: false
}
  const mask = new IMask(element, maskOptions);


//   maskOptions.updateValue();   // update model from view
//   maskOptions.updateControl()

const header = document.querySelector('.header'); // Здесь класс вашей шапки
window.addEventListener('scroll', function() {
  if (window.scrollY >= 54) {
    header.classList.add('header-black'); // Добавить класс, который будет менять стили
  } else {
    header.classList.remove('header-black'); // Убрать
  }
});


/******************************* */

const burgerMenu = document.getElementById('burger-menu');
const navContainer = document.getElementById('nav-container');
const ulNavigation = document.getElementById('ul-navigation');
const displayLocation = document.getElementById('container-burger-location')
const workingTime = document.getElementById('workintime-and-phone-number')



if(burgerMenu) {
  burgerMenu.addEventListener('click', function(e) {
    navContainer.classList.toggle('burger-open');
    ulNavigation.classList.toggle('burger-open');
    displayLocation.classList.toggle('burger-open')
    header.classList.toggle('burger-open')
    burgerMenu.classList.toggle('burger-open')


  })
}