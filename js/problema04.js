function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.primer.value="";
    document.formulario.segundo.value="";
    document.formulario.tercero.value="";
    document.formulario.exfinal.value="";
    document.formulario.trfinal.value="";
    document.formulario.calificacion.value="";
}

function obtener (){

    if(formulario.primer.value.length == 0) {
        alert('Escribe una calificación del primer parcial');
        return;
    }

    if(formulario.primer.value > 10) {
        alert('¿Un alumno sacando mas de 10? jajaja, escribe una califcación valida en el primer parcial');
        return;
    }
    
 
    if(formulario.segundo.value.length == 0) {
        alert('Escribe una calificación del segundo parcial');
        return;
    }

    if(formulario.segundo.value > 10) {
        alert('¿Un alumno sacando mas de 10? jajaja, escribe una califcación valida en el segundo parcial');
        return;
    }


    if(formulario.tercero.value.length == 0) {
        alert('Escribe una calificación del tercer parcial');
        return;
    }
    
    if(formulario.tercero.value > 10) {
        alert('¿Un alumno sacando mas de 10? jajaja, escribe una califcación valida en el tercer parcial');
        return;
    }

    if(formulario.exfinal.value.length == 0) {
        alert('Escribe una calificación del examen final');
        return;
    }

    if(formulario.exfinal.value > 10) {
        alert('Una de dos, o copiaste o eres el futuro de México, ingresa una cantidad valida');
        return;
    }
    

    if(formulario.trfinal.value.length == 0) {
        alert('Escribe una calificación del trabajo final');
        return;
    }

    if(formulario.trfinal.value > 10) {
        alert('Escribe una calificación valida, todos sabemos que no eres un genio');
        return;
    }
    //Conversión de variables a enteros
    var uno = document.formulario.primer.value;  
    var first = parseInt(uno);
    var dos = document.formulario.segundo.value;  
    var second = parseInt(dos);
    var tres = document.formulario.tercero.value;  
    var third = parseInt(tres);
    var exf = document.formulario.exfinal.value;  
    var exif = parseInt(exf);
    var trf = document.formulario.trfinal.value;  
    var trif = parseInt(trf);

    var promedio = (first+second+third) / 3;
    var q = (promedio*55) / 10;
    var x = parseInt(q);
    var w = (exif*30) / 10;
    var y = parseInt(w);
    var e = (trif*15) / 10;
    var z = parseInt(e);
    var totalca = (x + y + z) / 10;

    document.formulario.calificacion.value= totalca;

}