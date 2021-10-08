import routerx from 'express-promise-router'
import pokemonController from '../controllers/pokemonController.js'

const router = routerx()

router.get('/consultar', pokemonController.consultar)

export default router