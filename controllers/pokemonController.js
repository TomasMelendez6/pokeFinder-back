import model from '../models/pokemon.js'
import msj from '../message/message.js'

export default {
    consultar: async (req, res) => {
        try{
            const pokemons = await model.obtenerTodos()
            if (pokemons.length > 0){
                res.send(pokemons)
            }else{
                res.send(msj.mensajeSinResultados())
            }          
            
        }catch(error){
            msj.mensajeCustom(500, error)
        }
    }
}