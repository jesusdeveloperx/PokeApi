const listPokemon = document.querySelector("#lista-pokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";
for (let index = 1; index < 151; index++) {
    
    fetch(URL + index)
  .then(response => response.json())
  .then(data => show(data));
}

function show(data) {

let types$$ = data.types.map((type) =>  ` <p class=${type.type.name}>${type.type.name}</p>`);
types$$ = types$$.join('');
//console.log(types$$);



    const div$$ = document.createElement('div');
    div$$.classList.add('pokemon');
    div$$.innerHTML = `
    <div id="todos"  >
        <div class="pokemon-todos" id="lista-pokemon">
            <div class="pokemon">
                <p class="pokemon-id-back">${data.id}</p>
                <h2 class ="pokemon-nombre">${data.name}</h2>
                <div class="pokemon-img">
                    <img src="${data.sprites.other["official-artwork"].front_default}"
                        alt="${data.name}">
                </div>
                <div class="pokemon-info">
                    <div class="pokemon-tipos" style = 'padding-left : 30px;'>
                        ${types$$}
                    </div>
                    <div class="pokemon-stats">
                        <p class="stat">${data.height}</p>
                        <p class="stat">${data.weight}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
`;
listPokemon.appendChild(div$$)
}
