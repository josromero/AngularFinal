var misJugadores = []; 

// Obtenemos nuestro elemento donde mostrar los jugadores
var jugadores = document.getElementById('jugadores');

// Creamos una clase llamada jugador con un constructor que reciba 3 párametros
class Jugador {

  constructor(nombre) {
    this.nombre = nombre;
  }

}

// Función para crear nuestro jugador
function crearJugador() {
  // Obtenemos el nombre dado por el usuario
  var nombre = document.getElementById('nombre').value;
  // Creamos nuestro jugador
  var jugador = new Jugador(nombre);
  // Lo añadimos a nuestro arreglo
  misJugadores.push(jugador);
  // Actualizamos nuestra tabla
  actualizarJugadores();
}

// Con esta función recorremos a todos nuestros jugadores
// en el arreglo anteriormente creado
// y los mostramos en la tabla
function actualizarJugadores() {
  // Limipamos la tabla para no repetir jugadores
  jugadores.innerHTML = ''; 
  // Recorremos nuestros jugadores
  for (var i = 0; i < misJugadores.length; i++) {
    // Añadimos nuestros jugadores a la tabla
    jugadores.innerHTML = jugadores.innerHTML +
          '<tr>' +
              '<td>' + misJugadores[i].nombre + '</td>' +
              '<td>' + misJugadores[i].edad + '</td>' +
              '<td>' + misJugadores[i].dinero + '</td>' +
          '</tr>';
  }
}