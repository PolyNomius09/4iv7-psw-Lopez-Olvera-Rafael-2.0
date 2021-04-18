//problema 1 de tarea wiiiiii uwu mio uwu/

function problema1(){

    var p1_input = document.querySelector('#p1-input').value;



    //tenemos que detectar el espacio, tendria que dividir la cadena y colocarla
    //dentro de un array

    var p1_array = p1_input.split(' ').reverse();



      //dentro de un array
      //dentrodeunarray
      //alreves
      //separar

    var p1_res = '';


    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}



//problema 2
function problema2(){
    //lo primero que necesito es obtener los valores por parte de los campos de html
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    /*
    para encontrar el minimo producto escalar entre 2 vectores,
    tenemos que realizar las operaciones correspondientes que son
    con el maximo valor de un vector por el minimo valor del otro
    vector
    
    */

    //construir vectores
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    //ordenar los vectores 
    v1 = v1.sort(function(a, b){
        return b-a;
    });

    v2 = v2.sort(function(a, b){
        return b-a;
    });

    //invertir el vector 2
    v2 = v2.reverse();

    //producto
    var p2_producto = 0;

    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i]*v2[i];
    }

    //imprimir el resultado
    document.querySelector('#p2-output').textContent = 
    'Producto escalar minimo : '+p2_producto;
}

document.querySelector('#p2-output').textContent = 'Producto escalar minimo :'+ p2_producto;
}


//el tres queda de tarea wiiiiiiiiiii y hago el 1 wiiiiiiiiiii 

var caracteresValidos = /[^ÑA-Z-,]/g;
var caracteresNoValidos = /^,|,(?=,)/g;
var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayCaracteresUnicos = [];

function enviar(){
    var valor = document.querySelector('.entrada').value;
    var validar = validacion(valor);
    if(validar==true){
        alert("Validacion aceptda");
        var textoDividido = dividirTexto(valor);
        alert(textoDividido);
        var tamañoArray = textoDividido.length;
        for(i = 0; i < tamañoArray; i++){
            contadorCaracteresUnicos(textoDividido,i);
        }
        alert(arrayCaracteresUnicos);
    }else{
        alert("Validacion rechazada")
        //location.reload();
    }
}
/*
La validacion recarga la pagina porque sino obtenia
un error muy raro, no es la solucion optima, pero funciona:
Si introduces un valor "erroneo" lo va  rechazar, pero si
vuelves a introducir un valor erroneo cuya longitud coincida con n-1
siendo n el numero de veces que has introducido un valor erroneo, lo aprueba xd.
Ejemplo: Introduzco "zzz", "zazazaza", "rrr" y "xdx"
normalmente rechazaria "xdx" por no estar en mayusculas
pero como he introducido 4 veces un valor erroneo lo aprueba xd.
*/
function validacion(valor){
    var validacionComas = caracteresNoValidos.test(valor);
    if(valor==""){
        alert("Introduce texto para continuar")
    }else if(validacionComas==false){
        alert("Las comas estan bien");
        var validacionCaracteres = caracteresValidos.test(valor);
            if(validacionCaracteres==false){
                alert("El texto esta bien");
                validacionFinal = true;
            }else{
                alert("Introduce caracteres validos");
                document.querySelector('.entrada').value = "";
                validacionFinal = false;
            }
    }else{
        alert("No empieces con una coma y no la utilices dos veces seguidas sin una palabra de por medio");
        document.querySelector('.entrada').value = "";
        validacionFinal = false;
    }
    return validacionFinal;
}

function dividirTexto(valor){
    var textoDividido = valor.split(",");
    return textoDividido;
}

function contadorCaracteresUnicos(array, i){
    let caracteresUnicos = new Set(array[i]);
    arrayCaracteresUnicos[i] = caracteresUnicos.size;
}