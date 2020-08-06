/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() {
	let respuesta;
	let nombre;
	let cat;
	let precio;
	let max = 1000;
	let flag = 0;
	let contadorbebidas = 0;
let lacteo;

	do {
		nombre = prompt("Ingrese nombre de articulo");
		cat = prompt("Ingrese categoría");
		precio = parseInt(prompt("Ingrese precio $?"));

		if (flag == 0) {
			precio = max
			flag = 1
		}
		if (cat=="bebidas"){
			contadorbebidas++;
		}
		else if (cat=="lacteos") { 
			if  

		}

		respuesta = prompt("Desea continuar ingresando productos? Si/No")

	} while (respuesta == "si")

	if (max >= precio) {
		document.write("El producto más caro es :" + nombre);
	}
	document.write("el lacteo más caro es :" + lacteo);
	document.write(" Cantidad de articulos de categoría bebidas: " + contadorbebidas);


}
