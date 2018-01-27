function abmUsuario(accion)
{
   
    alert(accion);
    switch(accion) {
        case 1:
        crearUsuario();
            break;
        case 2:
        updateUsuario();
            break;
        case 3:
        deleteUsuario();
            break;
    }
    var Ausuario = document.getElementById('inputUsuario').value;

   function crearUsuario(usuario){    
        
    //creausuario

    }

    function updateUsuario(usuario){

    //UpdateUser
    }

    function deleteUsuario(usuairo){
        //deleteuser
    }

}
