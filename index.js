import crearServidor from './config/server.js'
import config from './config/config.js'
import express from 'express'
import path from 'path'


const app = crearServidor()

app.use(express.static(path.join(__dirname, 'public')))

//Pongo el servidor a escuchar
app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando en http://${config.HOST}:${config.PORT}`)
})