import model from '../models/pokemon.js'
import msj from '../message/message.js'
import axios from 'axios'

export default {
    consultar: async (req, res) => {
        try{
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=48');

            if (response.statusCode !== undefined && response.statusCode !== 200) {
                throw response;
            } else {
                const pokemons = response.data.results;

                if (pokemons.length > 0){
                    let result = []
                    for (const pd of pokemons){
                        const responseDetail = await axios.get(pd.url);
                        if(responseDetail.statusCode !== undefined && responseDetail.statusCode !== 200){
                            throw responseDetail;
                        }
                        else{
                            let pokemonDetail = responseDetail.data
                            let sprites = pokemonDetail.sprites
                            let pokemon = new model.Pokemon(pokemonDetail.id, pokemonDetail.name, pokemonDetail.height, pokemonDetail.weight, sprites.front_default, sprites.back_default)
                            result.push(pokemon.jsonConverter())
                        }
                    };
                    res.send(result);
                }else{
                    res.send(msj.mensajeSinResultados())
                }  
            }
        }catch(error){
            msj.mensajeCustom(500, error)
        }
    }
}