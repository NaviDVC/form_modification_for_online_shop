let choice = document.querySelectorAll('.item');
let carsList = document.querySelector('.middle__cars-list');
let phonesList = document.querySelector('.middle__phones-list');
let buyButton = document.querySelectorAll('.middle__choose-item');
let bmw = document.querySelector('.right__bmw');
let ford = document.querySelector('.right__ford');
let iphone = document.querySelector('.right__iphone');
let nokia = document.querySelector('.right__nokia');

function cars() {
  carsList.style.display = 'block';
  phonesList.style.display = 'none';
  console.log(buyButton);
}

function phones() {
  carsList.style.display = 'none';
  phonesList.style.display = 'block';
  console.log(buyButton);
}

function bmwCar() {
    bmw.style.display = 'block';
    ford.style.display = 'none';
    iphone.style.display = 'none';
    nokia.style.display = 'none';
    window.name = 'BMW M8 Competition';
}

function fordCar() {
    bmw.style.display = 'none';
    ford.style.display = 'block';
    iphone.style.display = 'none';
    nokia.style.display = 'none';
    window.name = 'Ford Mustang Shelby GT500';
}

function iphoPhone() {
    bmw.style.display = 'none';
    ford.style.display = 'none';
    iphone.style.display = 'block';
    nokia.style.display = 'none';
    window.name = 'iPhone 11 Pro Max 256GB';
}

function nokiaPhone() {
    bmw.style.display = 'none';
    ford.style.display = 'none';
    iphone.style.display = 'none';
    nokia.style.display = 'block';
    window.name = 'Nokia 3310 0MB';
}

choice[0].addEventListener('click', cars);

choice[1].addEventListener('click', phones);

buyButton[0].addEventListener('click', bmwCar);

buyButton[1].addEventListener('click', fordCar);

buyButton[2].addEventListener('click', iphoPhone);

buyButton[3].addEventListener('click', nokiaPhone);

document.addEventListener('click', (event) => {
    if (event.target.dataset.buy !== undefined) {
        window.message = alert(`You bought ${name}!`)
        location.reload()
    }
});