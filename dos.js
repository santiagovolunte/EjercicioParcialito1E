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
	let max;
	let flag = 0;
	let contadorbebidas = 0;
	let lacteo;
	let articulocaro;
	let preciolacteo = 0;


	do {
		nombre = prompt("Ingrese nombre de articulo");
		do {
			cat = prompt("Ingrese categoría");
		} while (!(cat == "lacteos" || cat == "bebidas" || cat == "almacen" || cat == "limpieza"));

		do {
			precio = parseInt(prompt("Ingrese precio $?"));
		} while (!(precio >= 0 && precio <= 1000));

		if (flag == 0) {
			max = precio
			flag = 1
		}
		if (precio >= max) {
			max = precio
			articulocaro = nombre
		}
		if (cat == "lacteos") {
			if (precio>=preciolacteo) {
			     lacteo = nombre}
	  }
		else if (cat == "bebidas") {
			contadorbebidas++;
		}

		respuesta = prompt("Desea continuar ingresando productos? Si/No")

	} while (respuesta == "si")


	document.write("El producto más caro es :" + articulocaro + "<br>");
	document.write("El lacteo más caro es :" + lacteo + "<br>");
	document.write("Cantidad de articulos de categoría bebidas: " + contadorbebidas + "<br>");


}
