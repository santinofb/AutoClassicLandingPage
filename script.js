const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 543400658168;
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