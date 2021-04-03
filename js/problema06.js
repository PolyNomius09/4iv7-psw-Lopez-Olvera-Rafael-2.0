function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.añon.value="";
    document.formulario.añoc.value="";
    document.formulario.edad.value="";
}

function Caledad (){
    if(formulario.añon.value.length == 0) {
        alert('No has escrito tu año de nacimiento');
        return;
    }

    if(formulario.añoc.value.length == 0) {
        alert('No has escrito el año actual');
        return;
    }

    var añona = document.formulario.añon.value;  
    var añonac = parseInt(añona);
    var añoct = document.formulario.añoc.value;  
    var añoctu = parseInt(añoct);
    
    if(añonac > añoctu) {
        alert('No puedes nacer en el futuro, ingresa años validos');
        return;
    }
    if(añoctu - añonac > 100) {
        alert('No creo que puedas vivir mas de 100 años, en caso de que puedas felicidades pero porfavor ingresa años logicos');
        return;
    }

    if(añoctu - añonac < 0) {
        alert('No existen los años negativos, si es necesario consulta tu acta de nacimiento y un calendario');
        return;
    }

    var tuedad = añoctu-añonac;

    document.formulario.edad.value=tuedad+" años";
}