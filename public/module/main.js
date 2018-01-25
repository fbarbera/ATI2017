function main()
{
    
    var usuario = document.getElementById('id_usuario').value;
    var pass = document.getElementById('id_pass').value;
    var puerta = document.getElementById('id_puerta'.value);


    var datos = new Object();
	datos.id_usuario = usuario;
	datos.id_pass = pass;
	datos.id_puerta = puerta;
    

    //alert(datos);

    //alert('usuario' + datos.id_usuario);

    //doors_controller('create',datos.id_puerta);
    
    var usuario = new Schema({  
    id_usuario: Number,
    nombre: String,
	});

	var puerta = new Schema({  
	    id_puerta: Number,    
	    ubicacion: String,
	    estado: Boolean,
	});
 
 	var usuarioPuerta = new Schema({  
	    id_usuario: Number,    
	    id_puerta: Number,
	});
	
}

