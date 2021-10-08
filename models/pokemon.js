import axios from 'axios'

//Metodo para obtener todos los pokemones de la API externa
async function obtenerTodos() {
    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200')
        // si hay error en la respuesta
        if (response.statusCode !== undefined && response.statusCode !== 200) {
            throw response
        } else {
            return response.data.results
        }
    } catch (error) {
        throw error
    }
}

export default {
    obtenerTodos
}