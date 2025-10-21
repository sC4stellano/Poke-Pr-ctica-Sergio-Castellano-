/*Ejercicio 1
Manipular eventos de los tres botones
Crea y manipula los eventos de los tres botones del menú (Agua, Fuego y Eléctrico) 
para que, al hacer clic, cambie el color del nav según el color del botón seleccionado.*/

//💾 Commit: Ejercicio 1 - Manipulación de eventos y cambio de color del nav

const btnWater = document.getElementById('water');
const btnFire = document.getElementById('fire');
const btnElectric = document.getElementById('electric');
const menu = document.querySelector('.menu');


function cambiarColorNav(color) {
    menu.style.backgroundColor = color;
}

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

const btnMostrar = document.getElementById('mostrar');
const listaPokemon = document.getElementById('listaPokemon');

async function fetchPokemons() {
    listaPokemon.innerHTML = ''; 

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const res = await fetch(url);
    const data = await res.json();

    const pokemons = data.results;

    for (const pokemon of pokemons) {
        const pokemonDetails = await fetch(pokemon.url);
        const detailsData = await pokemonDetails.json();

        const id = detailsData.id.toString().padStart(3, '0');
        const name = detailsData.name;
        const image = detailsData.sprites.other['official-artwork'].front_default;
        const tipos = detailsData.types.map(typeInfo => typeInfo.type.name);

        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon');

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

        listaPokemon.appendChild(pokemonElement);
    }
}


btnMostrar.addEventListener('click', () => {
    document.getElementById('todos').hidden = false; 
    fetchPokemons(); 
});


/*Ejercicio 3
Implementar un buscador de Pokémon

Implementa un buscador de Pokémon a tu gusto (puedes crear otra ventana o hacerlo en la misma página).
Aplica un diseño propio y muestra más atributos del Pokémon, como su nombre, tipo, id, imagen, etc.
Puedes basarte en el buscador visto en la primera clase de fetch.*/


const inputBuscar = document.getElementById('inputBuscar');
const resultadoBusqueda = document.getElementById('resultadoBusqueda');

inputBuscar.addEventListener('keydown', async (event) => {
    if (event.key === 'Enter') {
        const valor = inputBuscar.value.toLowerCase().trim();

        if (valor === '') {
            resultadoBusqueda.innerHTML = '<p>Por favor escribe un nombre o número de Pokémon.</p>';
            return;
        }

        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`);
            if (!res.ok) throw new Error('No encontrado');

            const data = await res.json();

            const id = data.id.toString().padStart(3, '0');
            const name = data.name;
            const image = data.sprites.other['official-artwork'].front_default;
            const tipos = data.types.map(t => t.type.name);
            const altura = data.height / 10;
            const peso = data.weight / 10;

            resultadoBusqueda.innerHTML = `
                <div class="pokemon">
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
                        <p>Altura: ${altura} m</p>
                        <p>Peso: ${peso} kg</p>
                    </div>
                </div>
            `;
        } catch (error) {
            resultadoBusqueda.innerHTML = '<p>Pokémon no encontrado. Intenta con otro nombre o número.</p>';
        }
    }
});

//💾 Commit: Ejercicio 3 - Buscador de Pokémon con diseño personalizado






