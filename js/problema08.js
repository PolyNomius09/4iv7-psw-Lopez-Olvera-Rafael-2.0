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
    document.formulario.Num3.value="";
    document.formulario.Numga.value="";
}

function caldo (){
    if(formulario.Num1.value.length == 0) {
        alert('No has escrito un primer número');
        return;
    }
    
    if(formulario.Num1.value.length > 8) {
        alert('No quiero ser aguafiestas pero ingresa un primer número mas pequeño');
        return;
    }

    if(formulario.Num2.value.length == 0) {
        alert('No has escrito un segundo número');
        return;
    }
    
    if(formulario.Num2.value.length > 8) {
        alert('No quiero ser aguafiestas pero ingresa un segundo número mas pequeño');
        return;
    }

    if(formulario.Num3.value.length == 0) {
        alert('No has escrito un tercer número');
        return;
    }
    
    if(formulario.Num3.value.length > 8) {
        alert('No quiero ser aguafiestas pero ingresa un tercer número mas pequeño');
        return;
    }

    var Num1 = document.formulario.Num1.value;  
    var x = parseInt(Num1);
    var Num2 = document.formulario.Num2.value;  
    var y = parseInt(Num2);
    var Num3 = document.formulario.Num3.value;  
    var z = parseInt(Num3);

    if(x > y){
        if(x > z){
            document.formulario.Numga.value= x;

        } else{
            document.formulario.Numga.value= z;
        }

    } else {
        if(y > z){
            document.formulario.Numga.value= y;

        } else{
            document.formulario.Numga.value= z;
        }

    }

}