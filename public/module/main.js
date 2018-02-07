function main()
{
    var database = firebase.database();

    var usuario = document.getElementById('listaUsu');
    var id_usuario = usuario.options[usuario.selectedIndex].value;

    var puerta = document.getElementById('listaPue');
    var id_puerta = puerta.options[puerta.selectedIndex].value;

    //alert(id_usuario);
    //alert(id_puerta);
    
    /*var datos = new Object();
	datos.listaUsu = usuario;
	datos.listaPue = puerta;*/


    var KeyUsu = "";
    var KeyPue = "";

    var rtaMainUsu = database.ref('Usuario');
	rtaMainUsu.orderByChild("Apellido").equalTo(id_usuario).on('child_added',function(ss)
	{
		var rtaMainUsu = ss.val();
		rtaMainUsu.key = ss.key;

		KeyUsu = rtaMainUsu.key;
		//alert(KeyUsu);

	});

    var rtaMainPue = database.ref('Puerta');
	rtaMainPue.orderByChild("Descripcion").equalTo(id_puerta).on('child_added',function(sss)
	{
		var rtaMainPue = sss.val();
		rtaMainPue.key = sss.key;

		KeyPue = rtaMainPue.Key;

		alert(KeyPue);
		
		//console.log(KeyPue);
	});
	
	alert(KeyPue);
	alert(KeyUsu);
	/*
	if(KeyPue =  KeyUsu)
	{
		alert("ok");
	}
	else 
	{
		alert("NOOOOOO");
	}
	*/
	
}

