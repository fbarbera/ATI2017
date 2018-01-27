function abmpermiso()
{

    alert(accion);
    switch(accion) {
        case 1:
            crearPermiso();
            break;
        case 2:
            updatePermiso();
            break;
        case 3:
            deletePermiso();
            break;

}
    

    var usuPerm = document.getElementById('inputUsuPerm').value;
    var doorPerm = document.getElementById('inputDoorPerm').value;


    alert('llego' + usuPerm);
    alert('llego' + doorPerm);


   function crearPermiso(permiso){    
    
    alert('crear'); 
    //creapermiso

    }

    function updatePermiso(permiso){

    alert('update'); 
    //UpdatePermiso
    }

    function deletePermiso(permiso){
        
        alert('delete');
        //deletepermiso
    }

}
