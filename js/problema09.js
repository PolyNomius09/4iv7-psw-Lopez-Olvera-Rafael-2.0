function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function borrar(){

    document.formulario.sueldo.value="";
    document.formulario.horas.value="";
    document.formulario.sueldote.value="";
}

function sueldito (){
    if(formulario.sueldo.value.length == 0) {
        alert('No has escrito nada en sueldo');
        return;
    }
    
    if(formulario.sueldo.value.length > 2) {
        alert('No creo que tengas un salario tan alto por hora, escribe un numero mas pequeño');
        return;
    }

    if(formulario.horas.value.length == 0) {
        alert('No has escrito nada en sueldo');
        return;
    }
    
    if(formulario.horas.value > 100) {
        alert('Si trabajas mas de 100 horas a la semana deberías considerar seguir es ese empleo, escribe un numero mas pequeño');
        return;
    }

    var Salario = document.formulario.sueldo.value;  
    var sal = parseInt(Salario);
    var horas = document.formulario.horas.value;  
    var hora = parseInt(horas);

    if(hora <= 40) {
        var solta = hora * sal;
        document.formulario.sueldote.value= solta;
        return;
    }

    if(hora > 40) {
        if(hora <= 48){
            var saldo = (hora - 40) * sal * 2;
            var kyc = sal * 40; 
            var dif = parseInt(saldo);
            var k = parseInt(kyc);
            var solta = k + dif;
            document.formulario.sueldote.value= solta;
        return;


        } else{
            var ckck = sal * 40 ;
            var pov = sal * 8 * 2;
            var xd = (hora - 48)* sal * 3;
            var ck = parseInt(ckck);
            var ei = parseInt(pov);
            var sec = parseInt(xd);
            var solta = ck + ei + sec;
            document.formulario.sueldote.value= solta;
        return;
        }
    }


} 