function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.poblacion.value="";
    document.formulario.Mu.value="";
    document.formulario.Ho.value="";
    document.formulario.Cmujeres.value="";
    document.formulario.Chombres.value="";
}

function calcular(){
    if(formulario.poblacion.value.length == 0) {
        alert('No has escrito nada en población');
        return;
    }
    
    if(formulario.poblacion.value.length > 3) {
        alert('¿Es un salon o una escuela completa? escribe un numero mas pequeño');
        return;
    }

    if(formulario.Mu.value.length == 0) {
        alert('No has escrito nada en cantidad de mujeres');
        return;
    }

    var pt = document.formulario.poblacion.value;
    var poto =parseInt(pt);
    
    if(formulario.Mu.value > poto) {
        alert('No es posible que ese numero de mujeres supere tu población total, ingresa una cantidad lógica');
        return;
    }

    if(formulario.Ho.value.length == 0) {
        alert('No has escrito nada en cantidad de hombres');
        return;
    }
    
    if(formulario.Ho.value > poto) {
        alert('No es posible que ese numero  de hombres supere tu población total, ingresa una cantidad lógica');
        return;
    }

    var M = document.formulario.Mu.value;
    var Muj =parseInt(M);
    var H = document.formulario.Ho.value;
    var Hom =parseInt(H);

    if(Muj+Hom > poto) {
        alert('La suma de hombres y mujeres no concuerda con la poblacion total');
        return;
    }

    if(Muj+Hom < poto) {
        alert('La suma de hombres y mujeres no concuerda con la poblacion total');
        return;
    }

    var muje = (Muj*100) / poto;
    var homb = (Hom*100) / poto;

    document.formulario.Cmujeres.value=muje+"%";
    document.formulario.Chombres.value=homb+"%";
}