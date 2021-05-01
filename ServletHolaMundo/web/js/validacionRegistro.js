function validarCampos(){
    
    validacion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    nombre = document.registrar.nombre.value;
    appat = document.registrar.appat.value;
    apmat = document.registrar.apmat.value;
    correo = document.registrar.email.value;
    
    if(nombre == ""){
        alert("Campo de nombre vacio");
        
        return false;
    }else{
        if(appat == ""){
            alert("Campo de apellido paterno vacio");
        
            return false;
        }else{
            if(apmat == ""){
                alert("Campo de apellido materno vacio");

                return false;
            }else{
                if(correo == ""){
                    alert("Campo de correo vacio");

                    return false;
                }else{
                    
                    if(! validacion.test(correo)){
                        alert("Correo invalido");

                        return false;
                    }else{
                        alert("todo bien nene");
                        
                        return true;
                    }
                    
                }
            }
        }
    }
    
}

function validarC(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[A-Za-z]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validarD(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[A-Za-z0-9@. - _]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function validarN(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}