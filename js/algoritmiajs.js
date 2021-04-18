//problema 1 de tarea 
function problema1(){
    var p1_input = document.querySelector('#p1-input').value;

    if(p1_input.length > 25) {
        alert('Tu lista es demasiado larga, escribe una mas corta');
        return;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM ";

    var allvalid = true;

    for(var i = 0; i < p1_input.length; i++){
        var ch = p1_input.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo letras y espacios");
        document.querySelector('#p1-input').focus();
        return false;
    }

    
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';
    p1_array.forEach(function (palabra, i){
        if(i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });

    document.querySelector('#p1-output').textContent = p1_res;

}

//problema 2 
function problema2() {
    //obtener valores por parte de los campos de html
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

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a,b){
        return b-a;
    });
    v2 = v2.sort(function(a,b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i=0; i < v1.length; i++){
        p2_producto = v1[i]*v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto escalar minimo :'+ p2_producto;
}

//Problema 3

function problema3() {
    var p3_input = document.querySelector('#p3-input').value;

    if(p3_input.length > 25) {
        alert('Tu lista es demasiado larga, escribe una mas corta');
        return;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM "
    + ",";

    var allvalid = true;

    for(var i = 0; i < p3_input.length; i++){
        var ch = p3_input.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }

    if(!allvalid){
        alert("Escribe solo letras y comas (,) ");
        document.querySelector('#p3-input').focus();
        return false;
    }

    var p3_array = p3_input.split(',');

    var Cantidad_C = [];
            
    p3_array.forEach( function (palabra) {
        var Ncar = palabra.length;
        for( var i=0; i < palabra.length; i++){
            var letra = palabra.charAt(i);
            for(var j=0; j < palabra.length; j++){
                if(letra == palabra.charAt(j)) Ncar -= 1;
            }
            Ncar += 1;
        }
        Cantidad_C.push(Ncar);
    });

    var M = Math.max.apply(null, Cantidad_C);

    var posiciones = [];

    for(var i=0; i< Cantidad_C.length; i++){
        if(Cantidad_C[i] == M){
            posiciones.push(i);
        }
    }
    var Respuesta= '';
    var CarU = '';
    posiciones.forEach(function (numero) {
        Respuesta += p3_array[numero];
    });

    document.querySelector('#p3-output').textContent= 'La palabra es: ' + Respuesta + ', con ' + M + ' caracteres únicos';



}