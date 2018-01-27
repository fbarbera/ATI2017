function abmPuerta(accion)
{
    alert(accion);
    switch(accion) {
        case 1:
            crearPuerta();
            break;
        case 2:
            updatePuerta();
            break;
        case 3:
            deletePuerta();
            break;
}

    var estado = document.getElementById('inputEstado').value;
    var ubicacion = document.getElementById('inputUbicacion').value;

    alert('ESTADO' + estado);
    alert('ubicacion' + ubicacion);

    function crearPuerta(puerta){    
       alert('crear'); 
    //creapuerta

    }

    function updatePuerta(puerta){
        alert('update'); 
    //UpdatePuerta
    }

    function deletePuerta(puerta){
        alert('delete'); 
        //deletepuerta
    }

}
