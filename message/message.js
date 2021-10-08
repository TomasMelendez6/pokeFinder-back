function mensajeSinResultados(){
    return{
        "estado": 200,
        "mensaje": "No se encontraron resultados"
    }
}

function mensajeCustom(estado, mensaje){
    return{
        "estado": estado,
        "mensaje": mensaje
    }
}



export default {    
    mensajeSinResultados,
    mensajeCustom
}