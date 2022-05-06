const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.pokemon-card')


listaSelecaoPokemons.forEach(pokemon =>{

    pokemon.addEventListener('click', () =>{
        const cardPokemonOpen = document.querySelector('.open')
        cardPokemonOpen.classList.remove('.open')

        const idPokemonSelecionado = pokemonn.attributes.id.value
        const idcardPokemonParaAbrir = idPokemonSelecionado + '-card'
        const cardPokemonParaAbrir = document.getElementById(idDoCardPokemonParaAbrir)
        cardPokemonParaAbrir.classList.add('open')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})