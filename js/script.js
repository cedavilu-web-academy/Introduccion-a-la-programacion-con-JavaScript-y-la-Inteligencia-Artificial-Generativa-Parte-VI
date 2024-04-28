//Capturando los elementos del DOM
let mostrar = document.getElementById('mostrar');
let iniciar = document.getElementById('iniciar');
let detener = document.getElementById('detener');
let resetear = document.getElementById('resetear');

//Variables
let contador = 0;
let intervaloConteo;

//Función mostrar el contador
function mostrarContador(){
    mostrar.innerHTML = contador;
}

//Función para inciar el conteo
function inciarConteo(){
    intervaloConteo = setInterval(()=>{
        contador++;
        //contador = contador + 1;
        mostrarContador()
    },1000)
    iniciar.disabled = true;
    detener.disabled = false;
}

//Función para detener el contador
function detenerConteo(){
    clearInterval(intervaloConteo);
    iniciar.disabled = false;
    detener.disabled = true;
}

//Función para resetear el conteo
function resetearConteo(){
    clearInterval(intervaloConteo);
    contador = 0;
    mostrarContador();
    iniciar.disabled = false;
    detener.disabled = true;
}



//Controlar los eventos
iniciar.addEventListener('click',inciarConteo);
detener.addEventListener('click', detenerConteo);
resetear.addEventListener('click', resetearConteo)

mostrarContador();
