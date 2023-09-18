const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombre').value;
        let asunto = document.getElementById('asunto').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 543400658168;
var win= window.open(`https://wa.me/${numero}?text=Hola,%20mi%20nombre%20es%20${nombre}. Asunto:%20${asunto}.%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)