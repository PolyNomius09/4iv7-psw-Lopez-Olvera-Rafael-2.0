function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.sueldo.value="";
    document.formulario.meses.value="";
    document.formulario.util.value="";
}

function utilidad(){
    if(formulario.sueldo.value.length == 0) {
        alert('No has escrito nada en sueldo');
        return;
    }
    
    if(formulario.sueldo.value.length > 5) {
        alert('No creo que tengas un salario tan alto, escribe un numero mas pequeño');
        return;
    }

    if(formulario.meses.value.length == 0) {
        alert('No has escrito nada en meses laborados');
        return;
    }
    
    if(formulario.sueldo.meses > 720) {
        alert('Wow toda una vida en esa empresa, pero no creo que aguantes tanto, escribe un numero de meses valido');
        return;
    }

    var suel = document.formulario.sueldo.value;  
    var sueldo = parseInt(suel);
    var me = document.formulario.meses.value;  
    var meses = parseInt(me);

    if(meses < 12) {
        var total = sueldo * 0.05;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( 12 <= meses < 24) {
        var total = sueldo * 0.07;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( 24 <= meses < 60) {
        var total = sueldo * 0.1;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( 60 <= meses < 120) {
        var total = sueldo * 0.15;
        document.formulario.util.value="$"+ total;
        return;
    }

    if( meses > 120) {
        var total = sueldo * 0.2;
        document.formulario.util.value="$"+ total;
        return;
    }


}