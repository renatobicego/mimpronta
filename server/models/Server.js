const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../db/config')
const {rateLimit} = require('express-rate-limit')

const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	limit: 200, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    validate: {ip: false}
})

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PUERTO

        this.paths = {
            imagePostPath: '/image_post',
            paragraphPostPath: '/paragraph_post',
            postPath: '/blog',
        }

        //Base de datos
        this.conectarDB()

        //Middlewares
        this.middlewares()

        //Rutas
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use(limiter)
    }

    routes(){
        this.app.use(this.paths.postPath, require('../routes/post'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo');
        })
    }

    getApp(){
        return this.app
    }
}

module.exports = Server