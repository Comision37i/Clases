const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.usuariosPath = '/api/usuarios';
        this.categoriasPath = '/api/categorias';
        this.cursosPath = '/api/cursos';
        this.buscarPath = '/api/buscar';

        //Conectar a Base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Función para las rutas
        this.routes(); 
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Leer lo que envía el usuario por el cuerpo de la pertición
        this.app.use(express.json());

        //Definir la carpeta pública
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server online por: ', this.port);
        })
    }
}

module.exports = Server;