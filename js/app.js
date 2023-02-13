
	var cantidad;
	var desc;
	var compra;
	var compraTotal; 
	var pagar;
while (true){
	compra = parseFloat(prompt("Ingresar compra"));
	cantidad = parseFloat(prompt("Ingresar cantidad"));	
	if (compra =! null)	{
		alert ("es valido");
		break;
	} else { 
			alert ("no es valido");
			continue;
	}
}	
	compraTotal = compra * cantidad;
	desc = compraTotal*0.15;
	pagar = compraTotal-desc;
	

	console.log ("El descuento es: "+desc);
	console.log ("El total a pagar es: "+pagar);
	
	
