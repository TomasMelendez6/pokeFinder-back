import routerx from 'express-promise-router'
import pokemonRouter from './pokemon.js'

const router = routerx()

router.use('/pokemon', pokemonRouter)

export default router