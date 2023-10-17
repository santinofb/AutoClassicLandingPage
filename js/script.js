const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 543412095624;
var win= window.open(`https://wa.me/${numero}?text=Hola,%20mi%20nombre%20es%20${nombre}.%20Asunto:%20${asunto}.%20${mensaje}`,'_blank');
}
evento.addEventListener('click', enviarFormulario)

const nombre = document.getElementById("nombre");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
nombre.addEventListener("input", (e) => {
  const {data} = e;
  if (nombre.value.length === 1 && data) {
    nombre.value = data.toUpperCase();
  }
});
asunto.addEventListener("input", (e) => {
        const {data} = e;
        if (asunto.value.length === 1 && data) {
          asunto.value = data.toUpperCase();
        }
});
mensaje.addEventListener("input", (e) => {
        const {data} = e;
        if (mensaje.value.length === 1 && data) {
          mensaje.value = data.toUpperCase();
        }
});

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
btnAbrirPopup.addEventListener('click', function(){
  overlay.classList.add('active');
  popup.classList.add('active');
});
btnCerrarPopup.addEventListener('click', function(){
  overlay.classList.remove('active');
  popup.classList.remove('active');
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 5,
  spaceBetween: 24,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
    1375: {
      slidesPerView: 5,
    },
  }
});

const btnSwitch = document.querySelector('#container');
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  btnSwitch.classList.toggle('active');
  if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
};

const checkbox = document.querySelector("#check"),
      desmarcar = document.querySelector("#desmarcar"),
      desmarcar2 = document.querySelector("#desmarcar2"),
      desmarcar3 = document.querySelector("#desmarcar3"),
      togglemenu = document.querySelector("#toggle-menu");
desmarcar.addEventListener("click", () => {
  checkbox.checked = false;
});
desmarcar2.addEventListener("click", () => {
  checkbox.checked = false;
});
desmarcar3.addEventListener("click", () => {
  checkbox.checked = false;
});
togglemenu.addEventListener("click", () => {
  togglemenu.classList.toggle('active');
});
desmarcar.addEventListener("click", () => {
  togglemenu.classList.remove('active');
});
desmarcar2.addEventListener("click", () => {
  togglemenu.classList.remove('active');
});
desmarcar3.addEventListener("click", () => {
  togglemenu.classList.remove('active');
});

var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
    iframe = document.getElementById('iframe');
btnAbrirPopup2.addEventListener('click', function(){
  overlay2.classList.add('active');
  popup2.classList.add('active');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/yyS5th5ctg0?si=vmyUECXpmPVXwhtn');
});
btnCerrarPopup2.addEventListener('click', function(){
  overlay2.classList.remove('active');
  popup2.classList.remove('active');
  iframe.removeAttribute('src');
});