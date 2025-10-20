/*Ejercicio 1
Manipular eventos de los tres botones
Crea y manipula los eventos de los tres botones del menú (Agua, Fuego y Eléctrico) 
para que, al hacer clic, cambie el color del nav según el color del botón seleccionado.*/

//💾 Commit: Ejercicio 1 - Manipulación de eventos y cambio de color del nav
// Seleccionamos los botones y el menú
const btnWater = document.getElementById('water');
const btnFire = document.getElementById('fire');
const btnElectric = document.getElementById('electric');
const menu = document.querySelector('.menu');

// Función para cambiar el color del navegador
function cambiarColorNav(color) {
    menu.style.backgroundColor = color;
}

// Agregamos los event listeners a los botones
btnWater.addEventListener('click', () => {
    cambiarColorNav(getComputedStyle(btnWater).backgroundColor);
});

btnFire.addEventListener('click', () => {
    cambiarColorNav(getComputedStyle(btnFire).backgroundColor);
});

btnElectric.addEventListener('click', () => {
    cambiarColorNav(getComputedStyle(btnElectric).backgroundColor);
});


/*Ejercicio 2
Mostrar los primeros 151 Pokémon

Realiza una petición fetch a la API de Pokémon 
(https://pokeapi.co/api/v2/pokemon?limit=151) y muestra los primeros 
151 Pokémon dentro del contenedor div con el id listaPokemon, 
siguiendo la estructura del ejemplo comentado en el archivo index.html.*/

//💾 Commit: Ejercicio 2 - Fetch y renderizado de los primeros 151 Pokémon




/*Ejercicio 3
Implementar un buscador de Pokémon

Implementa un buscador de Pokémon a tu gusto (puedes crear otra ventana o hacerlo en la misma página).
Aplica un diseño propio y muestra más atributos del Pokémon, como su nombre, tipo, id, imagen, etc.
Puedes basarte en el buscador visto en la primera clase de fetch.*/

//💾 Commit: Ejercicio 3 - Buscador de Pokémon con diseño personalizado






