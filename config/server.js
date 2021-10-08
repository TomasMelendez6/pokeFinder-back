import express from 'express'
import router from '../routes/index.js'
import cors from 'cors'
import morgan from 'morgan'

const main = () =>{
    const app = express()

    // app.use(connect())
    app.use(express.json())
    app.use(cors())
    app.use(morgan('dev'))
    app.use('/api', router)
    app.set('port', process.env.PORT || 3000)

    return app

}

export default main