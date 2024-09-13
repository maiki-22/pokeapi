const button = document.getElementById('apiButton');
button.addEventListener('click', ()=>{
    ObtenerPokemon();
})



const ObtenerPokemon = async() => {
    try {
        pokeAlAzar = (min, max) => {
            return Math.floor(Math.random()*(max - min + 1)) + min;  
        }
        const pokemonIds = ['pokemon1', 'pokemon2', 'pokemon3', 'pokemon4', 'pokemon5', 'pokemon6'];
        
        for (let i = 0; i < pokemonIds.length; i++){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeAlAzar(1,1025)}`)
            console.log(res.data);

            if (pokeAlAzar(1,20) == 20){
                var pokeURL = res.data.sprites.front_shiny;
                var pokemon = document.getElementById(pokemonIds[i]);
                pokemon.setAttribute('src', pokeURL);


            }
            else{
                var pokeURL = res.data.sprites.front_default;
                var pokemon = document.getElementById(pokemonIds[i]);
                pokemon.setAttribute('src', pokeURL);

            }

            

        }
        
        
        
        

    }
    catch(error){
        console.log(error);
    }
}

