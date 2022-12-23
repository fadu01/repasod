let savedPass = '1111'
let savedUser = 'fadu'

function login() {
    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let user = prompt('Ingresa tu nombre de usuario')

        let userPass = prompt('Ingresá tu contraseña. Tenés ' + (i + 1) + ' intentos.');

        if (user === savedUser && userPass === savedPass) {

            alert('Usuario logueado exitosamente. Hola ' + savedUser + '!');
            ingresar = true;
            break;

        } else {

            alert('Usuario o contraseña incorrecta. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;
}


/* let opcionUser = prompt ('Bienvenido. Elija una opcion: \n1 - Loguearse. \n2 - Comprar como invitado.')

if(opcionUser == '1'){
    
    login()
} else {
    let nonbreAnonimo = prompt('Escribe tu nombre')
}
alert('Hola '+ nombreAnonimo)
 */
let precioTotal = (producto, envio) => producto + envio;
if (login()) {

    let precioComic = 1500;
    let precioFunko = 3000;
    let precioCartas = 300;
    let precioEnvio = 500;

    let opcionCompra = prompt('Elegi que queres comprar: \n1 - Comic \n2 - Funko \n3 - Cartas \nx - Salir')

    switch (opcionCompra) {
        case '1':
            alert('Elegiste Comic');
            alert('El costo del producto es ' + precioComic);
            alert('El costo del envio es ' + precioEnvio);
            alert('El costo total del producto es ' + precioTotal(precioComic, precioEnvio));
            break;
        case '2':
            alert('Elegiste Funko');
            alert('El costo del producto es ' + precioFunko);
            alert('El costo del envio es ' + precioEnvio);
            alert('El costo total del producto es ' + precioTotal(precioFunko, precioEnvio));
            break;
        case '3':
            alert('Elegiste Cartas');
            alert('El costo del producto es ' + precioCartas);
            alert('El costo del envio es ' + precioEnvio);
            alert('El costo total del producto es ' + precioTotal(precioCartas, precioEnvio));
            break;

        default:
            alert("Opcion no disponible");
            break;
    }
    alert('Gracias por su compra!')
} else {
    alert('Usuario bloqueado. Revise su casilla de mail para restablecer.')
}