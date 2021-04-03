
function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.sueldo.value="";
    document.formulario.ventas.value="";
    document.formulario.comisiones.value="";
    document.formulario.sueldom.value="";
}

function comision(){

    if(formulario.sueldo.value.length == 0) {
        alert('No has escrito nada en sueldo');
        return;
    }
    
    if(formulario.sueldo.value.length > 9) {
        alert('No creo que tengas un salario tan alto, escribe un numero mas pequeño');
        return;
    }

    if(formulario.ventas.value.length == 0) {
        alert('No has escrito nada en ventas');
        return;
    }

    if(formulario.ventas.value.length > 2) {
        alert('¿Acaso eres de otro planeta? Escribe un numero real de ventas');
        return;
    }

    var base = document.formulario.sueldo.value;
    var ventas = document.formulario.ventas.value;  
    var sueldo = parseInt(base);
    var Noventas = parseInt(ventas);
    var comi = sueldo*0.1*Noventas;
    var total = sueldo + (sueldo*0.1*Noventas);

    document.formulario.comisiones.value="$"+ comi;

    document.formulario.sueldom.value="$"+ total;
}