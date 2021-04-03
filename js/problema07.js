function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.Num1.value="";
    document.formulario.Num2.value="";
    document.formulario.resultadoM.value="";
}

function cal (){
    if(formulario.Num1.value.length == 0) {
        alert('No has escrito el primer número');
        return;
    }
    
    if(formulario.Num1.value.length > 4) {
        alert('Me encanta tu entusiasmo pero inserta un primer numero mas pequeño por favor');
        return;
    }

    if(formulario.Num2.value.length == 0) {
        alert('No has escrito el segundo número');
        return;
    }
    
    if(formulario.Num2.value.length > 4) {
        alert('Me encanta tu entusiasmo pero inserta un segundo numero mas pequeño por favor');
        return;
    }

    var Num1 = document.formulario.Num1.value;  
    var x = parseInt(Num1);
    var Num2 = document.formulario.Num2.value;  
    var y = parseInt(Num2);

    if (x == y){
        var multi = x * y;
        document.formulario.resultadoM.value=multi;
        return;
    }

    if (x > y){
        var resta = x - y;
        document.formulario.resultadoM.value=resta;
        return;
    }

    if (x < y){
        var suma = x + y;
        document.formulario.resultadoM.value=suma;
        return;
    }

}