const productos = [
	{nombre: "Jeans", precio: 1000 },
	{nombre: "Remera", precio: 2000 },
	{nombre: "Shorts", precio: 3000 },
	{nombre: "Camisa", precio: 4000 },
	{nombre: "Pollera", precio: 5000 },
];

let carrito = []

let seleccion = prompt ("Ingresar productos a comprar, si o no")
	
while(seleccion != "si" && seleccion != "no"){
	alert ("Por favor ingresar si o no")
	seleccion = prompt ("Ingresar productos a comprar, si o no")
}	
if (seleccion == "si")
{
	alert("Estos son nuestros productos")
	let listaProductos = productos.map(
		(productos) => productos.nombre + " " + "$" + productos.precio 
	);
	alert(listaProductos.join(" - "))
} else if (seleccion == "no") 
{
	alert ("Vuelva pronto, gracias")
}
while (seleccion != "no")
{
	let producto = prompt ("Ingresa un producto a tu carrito")
	let precio = 0

	if (producto == "Jeans" || producto == "Remera" || producto == "Shorts" || producto == "Camisa" || producto == "Pollera")
	{
		switch(producto)
		{
		case "Jeans":
			precio = 1000;
			break;
		case "Remera":
			precio = 2000;
			break;
		case "Shorts":
			precio = 3000;
			break;
		case "Camisa":
			precio = 4000;
			break;
		case "Pollera":
			precio = 5000;
			break;
		default:
			break;

		}
	let unidades = parseInt(prompt("Ingrese cantidad de unidades"))	
	carrito.push({producto, unidades, precio})
	console.log(carrito)
	}else{
		alert ("No disponemos de ese producto")
	}
	seleccion = prompt("¿Desea seguir comprando?")
	while(seleccion === "no")
	{
		alert("Gracias por la compra")
		carrito.forEach((carritoFinal)=>{
			console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
		})
		break;
	}
}
const total = carrito.reduce((acc, el)=> acc + el.precio * el.unidades, 0)
console.log (`el total a pagar por su compra es: ${total}`)