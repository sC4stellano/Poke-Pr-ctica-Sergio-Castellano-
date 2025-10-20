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

document.addEventListener('DOMContentLoaded', () => {
    const listaPokemon = document.getElementById('listaPokemon');

    // Función para traer los datos de los primeros 151 Pokémon
    async function fetchPokemons() {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        const res = await fetch(url);
        const data = await res.json();

        // data.results es un array con {name, url} de cada pokemon
        const pokemons = data.results;

        // Por cada pokemon, traer sus detalles (sprites, tipos, id)
        for (const pokemon of pokemons) {
            const pokemonDetails = await fetch(pokemon.url);
            const detailsData = await pokemonDetails.json();

            // Extraemos datos necesarios
            const id = detailsData.id.toString().padStart(3, '0');
            const name = detailsData.name;
            const image = detailsData.sprites.other['official-artwork'].front_default;

            // Los tipos vienen en un array
            const tipos = detailsData.types.map(typeInfo => typeInfo.type.name);

            // Creamos el HTML para cada pokemon
            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('pokemon');

            // Usamos template literal para agregar el contenido
            pokemonElement.innerHTML = `
                <div class="pokemon-imagen">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="pokemon-info">
                    <div class="nombre-contenedor">
                        <p class="pokemon-id">#${id}</p>
                        <h2 class="pokemon-nombre">${name}</h2>
                    </div>
                    <div class="pokemon-tipos">
                        ${tipos.map(tipo => `<p class="${tipo} tipo">${tipo}</p>`).join('')}
                    </div>
                </div>
            `;

            // Añadimos el pokemon al contenedor
            listaPokemon.appendChild(pokemonElement);
        }
    }

    // Llamamos a la función para traer y mostrar los pokemones
    fetchPokemons();
});


/*Ejercicio 3
Implementar un buscador de Pokémon

Implementa un buscador de Pokémon a tu gusto (puedes crear otra ventana o hacerlo en la misma página).
Aplica un diseño propio y muestra más atributos del Pokémon, como su nombre, tipo, id, imagen, etc.
Puedes basarte en el buscador visto en la primera clase de fetch.*/

//💾 Commit: Ejercicio 3 - Buscador de Pokémon con diseño personalizado






