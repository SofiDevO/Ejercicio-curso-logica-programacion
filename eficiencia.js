var division  = function (a,b){
return a / b;
}

let seleccion
let tanque = 40
 






let botongasolina = document.getElementById('gasolina');
botongasolina.addEventListener('click', recorridogas);


let botonalcohol = document.getElementById('alcohol');
botonalcohol.addEventListener('click', recorridoalcohol);

   
   

function recorridogas(){
    seleccion = 480; 
    crearMensaje("Haz seleccionado, Gasolina.   " + " Kilometros totales: " +  seleccion + " Kilometros")  
    
} 

function recorridoalcohol(){
    seleccion = 300;
    crearMensaje("Haz seleccionado, Alcohol.  " + " Kilometros totales: " + seleccion + " Kilometros")
}


function crearMensaje(mensaje){
    const sectionMensajes = document.getElementById('resultado');
    sectionMensajes.innerHTML = mensaje
}


let botonCalcular = document.getElementById('eficiencia');
botonCalcular.addEventListener('click', resultadoFinal);


function  resultadoFinal(){ 
    var resultado = division(seleccion, tanque)  
    crearMensajeFinal("La eficiencia del auto es  de " + resultado + "  Kilometros por Litro")
}

function crearMensajeFinal(mensajeFinal){
    const sectionResultadoMensaje = document.getElementById('mensajeFinal');
    sectionResultadoMensaje.innerHTML = mensajeFinal

}

window.addEventListener('load',division);