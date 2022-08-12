const productos = [] 

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

function generadorAutomatico() {
    productos.push(new Producto(1, "Bucket Grey", 60000))
    productos.push(new Producto(2, "Bucket Green", 60000))
    productos.push(new Producto(3, "Bucket Purple", 60000))
    productos.push(new Producto(4, "Vest Grey", 100000))
    productos.push(new Producto(5, "Vest Purple", 100000))
    productos.push(new Producto(6, "Poncho Yellow", 150000))
    productos.push(new Producto(7, "Poncho Pink", 150000))
    productos.push(new Producto(8, "Sunglass Yellow & Green", 90000))
    productos.push(new Producto(9, "Sunglass Purple & Pink", 90000))
    productos.push(new Producto(10, "Chain Silver", 250000))
}

function mostrarProducto(){
    let numero=parseInt(prompt("Selecciona el id del producto de Wuacamoli que quisieras ver (Selecciona de 1-10): "))
    while (numero>10 || numero<1){
        alert("El número tiene que ser entre 1 y 10"); 
        numero=parseInt(prompt("Selecciona el id del producto de Wuacamoli que quisieras ver (Selecciona de 1-10): "))
    }
    console.table(productos[numero-1])
}

function agregarProducto(){
    let confirmacion=confirm("¿Deseas agregar un nuevo producto?")
    if (confirmacion==true){
        let nombreIngresado=prompt("Digita el nombre del nuevo producto: ")
        let precioIngresado=parseFloat(prompt("Ingresa el precio del nuevo producto: "))
        productos.push(new Producto(productos.length+1, nombreIngresado, precioIngresado))
        console.table(productos[productos.length-1])
    }
}

function buscarProducto() {
    let prod = prompt("Ingresa el nombre exacto del producto a buscar producto a buscar:")
    const resultado = productos.find(elemento => elemento.nombre === prod)
    console.table(resultado)
}

function filtrarProducto() {
    let prod = prompt("Ingresa una palabra del nombre del producto a buscar:")
    const resultado = productos.filter(elemento => elemento.nombre.includes(prod))
     console.table(resultado)
}


alert("Bienvenidos a Wuacamoli!")
generadorAutomatico()
let opcion=parseInt(prompt("Escoja lo que quiere hacer: \n 1. Buscar productos existentes. \n 2. Filtrar productos existentes. \n 3. Agregar un producto."))
while (opcion>3 || opcion<1){
    alert("Escoja una de las opciones disponibles"); 
    opcion=parseInt(prompt("Escoja lo que quiere hacer: \n 1. Buscar productos existentes. \n 2. Filtrar productos existentes. \n 3. Agregar un producto."))
}

if (opcion==1){
    buscarProducto()
}
else if(opcion==2){
    filtrarProducto()
}
else{
    agregarProducto()
}
