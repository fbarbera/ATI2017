//const admin = require('firebase-admin');
// Pass the Firebase config directly to initializeApp() to auto-configure
// the Admin Node.js SDK
//admin.initializeApp(functions.config().firebase);

//var db = admin.database();

//acceso al  servicio de la BD
var database = firebase.database();

//cargar select
/*var refRta = database.ref('Usuario');
refRta.on('child_added',function(ss){
var resp = ss.val();
var item = document.createElement('li');
item.innerHTML = '<input name="resp" type="radio" value="' + resp.valor + '">' + resp.Apellido;
document.getElementById('lista').appendChild(item);*/


//select usuario 
var array = [];
var sltUsu = document.getElementById("listaUsu");

var refRta = database.ref('Usuario');
refRta.on('child_added',function(ss)
{
	var item = ss.val();
	item.key = ss.key;
	
    //console.log(item.Apellido);
	//array.push(item.Apellido);
	 array.splice(0,array.length,item.Apellido);

	//selectList.id = "listaUsu";
	//slt.appendChild(listaUsu);

//for (var i = 0; i < array.length; i++) 
for (i in array) 
	{
	    var optionUsu = document.createElement("option");
	    optionUsu.value = array[i];
	    optionUsu.text = array[i];
	    sltUsu.appendChild(optionUsu);
	}
});

//select puerta 
var arrayPue = [];
var sltPue = document.getElementById("listaPue");
//var selectListPue = document.createElement("select");

var refRtaPue = database.ref('Puerta');
refRtaPue.on('child_added',function(ssP)
{
	var itemPue = ssP.val();
	itemPue.key = ssP.key;
	
    //console.log(itemPue);


	//arrayPue.push(itemPue.Descripcion); 
	arrayPue.splice(0,arrayPue.length,itemPue.Descripcion);
	 
	//selectListPue.id = "listaPue";
	//myDivPue.appendChild(selectListPue);

	//Create and append the options
	for (var j = 0; j < arrayPue.length; j++) 
	{
	    var optionPue = document.createElement("option");
	    optionPue.value = arrayPue[j];
	    optionPue.text = arrayPue[j];
	    sltPue.appendChild(optionPue);
	}
});
