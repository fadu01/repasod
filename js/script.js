let savedPass = '1111'
let savedUser = 'fadu'

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let user = prompt('Ingresa tu nombre de usuario')

        let userPass = prompt('Ingresá tu contraseña. Tenés ' + (i + 1) + ' intentos.');

        if (user === savedUser && userPass === savedPass) {

            alert('Usuario logueado exitosamente. Hola fadu');
            ingresar = true;
            break;

        } else {

            alert('Usuario o contraseña incorrecta. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;
}

if (login()) {
    alert("Ya podes empezar a cargar productos");
} else {
    alert("Tu cuenta fue bloqueada, oprime el link que te enviamos al mail para restablecerla");
}

class Producto {

    constructor(titulo, editorial, genero, fecha, precio, id) {
        this.titulo = titulo;
        this.editorial = editorial;
        this.genero = genero;
        this.fecha = parseInt(fecha);
        this.precio = parseFloat(precio);
        this.id = id;
    }

    asignarId(array) {
        this.id = array.length;
    }
}

const productos = [
    new Producto('Deadpool', 'Marvel Comics', 'Superheroes', 1997, 2200, 1),
    new Producto('DragonBall Z', 'Shueisha', 'Manga', 1984, 2000, 2),
    new Producto('The Walking Dead', 'Image Comics', 'Zombies', 2003, 1300, 3),
    new Producto('Invencible', 'Image Comics', 'Superheroes', 2002, 1700, 4),
    new Producto('Batman', 'DC Comics', 'Superheroes', 1940, 2500, 5),
    new Producto('The Boys', 'Dynamite', 'Superheroes', 2006, 1500, 6),
]

console.log(productos);

let continuar = true;

while (continuar) {
    let ingreso = prompt("Ingresa: titulo, editorial, genero, fecha y precio. Separados por (-). Tipea X para finalizar)");

    if (ingreso.toUpperCase() == "X") {
        continuar = false;
        break;
    }

    let datos = ingreso.split("-");
    const productoIngresado = new Producto(datos[0], datos[1], datos[2], datos[3], datos[4]);

    productos.push(productoIngresado);
    productoIngresado.asignarId(productos);
    console.log(productos);
}

let criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A) \n3 - Precio (Menor a mayor) \n4 - Precio (Mayor a menor) \n5 - Fecha de publicación');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            return arrayOrdenado.sort((a, b) => a.titulo - b.titulo);
        case '2':
            return arrayOrdenado.sort((a, b) => b.titulo - a.titulo);
        case '3':
            return arrayOrdenado.sort((a, b) => a.precio - b.precio);
        case '4':
            return arrayOrdenado.sort((a, b) => b.precio - a.precio);
        case '5':
            return arrayOrdenado.sort((a, b) => a.fecha - b.fecha);
        default:
            alert('No es un criterio válido');
            break;
    }
}

function crearStringResultado(array) {
    let info = '';

    array.forEach(elemento => {
        info += 'Título: ' + elemento.titulo + '\nEditorial: ' + elemento.editorial + '\nGenero: ' + elemento.genero + '\nAño de publicación: ' + elemento.fecha + '\nPrecio: $' + elemento.precio + '.\n\n'
    })

    return info;
}

alert(crearStringResultado(ordenar(criterio, productos)));

let generoElegido = prompt("Elegí un genero - Superheroes, manga o zombies")

const filtrado = productos.filter((producto) => producto.genero.toLowerCase().includes(generoElegido.toLowerCase()))

if (filtrado.length == 0) {
    alert("Lo sentimos, no fue encontrado");
} else {
    const imprimible = filtrado.map((producto) => producto.titulo);
    alert("Las historietas para el genero elegido son: \n- " + imprimible.join("\n- "))
}