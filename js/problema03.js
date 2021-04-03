function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.compra.value="";
    document.formulario.total.value="";
}

function descuento (){

    if(formulario.compra.value.length == 0) {
        alert('No has escrito nada en compra');
        return;
    }
    
    if(formulario.compra.value.length > 9) {
        alert('¿Estás comprando toda a tienda? :0 escribe un total verdadero');
        return;
    }

    var valor = document.formulario.compra.value;  
    var compra = parseInt(valor);
    var total = compra - (compra*0.15);

    document.formulario.total.value="$"+ total;

}