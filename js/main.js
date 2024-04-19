let teclas;
let pantalla;

window.onload = function() {
    pantalla= document.getElementsById('pantalla');
    teclas=document.getElementsByClassName('teclas')
    agregarEventos(teclas);
    pantalla.value='';
}
function agregarEventos(teclas){
    for ( let i = 0; i< teclas.length; i++){
        let valor = this.innerHTML;
        if(pantalla.value.length<10){
            pantalla.value += valor; //cantidad de dijitos que permite la calculadora

        }

    }
}