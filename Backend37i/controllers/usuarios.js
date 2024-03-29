const { response, request } = require('express');
const { validationResult} = require ('express-validator');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = async (req=request, res=response) => {
    const {desde=0, limite=25} = req.query;
    const query = {estado:true}
    
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query).skip(desde).limit(limite)
    ]) 

    res.json({
        mensaje: 'Usuarios obtenidos',
        total,
        usuarios
    })
}

const usuariosPost = async (req=request, res=response) => {
    //Recibir el cuerpo de la petición
    const datos = req.body;
    const {nombre, correo, password, rol} = datos;
    const usuario = new Usuario({nombre, correo, password, rol});

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    usuario.password = hash;

    /* const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    usuario.password = hash;  */

    // guardar en la BD
    await usuario.save();

    res.json({
        usuario,
        message: "Usuario creado correctamente"
    })
}

const usuarioPut = async (req=request, res=response) => {
    
    const {id}= req.params;

    //obtener datos para actualizar
    const {password, correo, ...resto} = req.body;

    //Si actualizo el password, debo cifrarlo o encriptarlo
    if(password){
        const salt = bcrypt.genSaltSync(10);
        resto.password = bcrypt.hashSync(password, salt);
    }
    resto.correo = correo;

    //buscar el usuario y actualizarlo
    const usuario = await Usuario.findByIdAndUpdate(id, resto, {new: true})

    res.json({
        mensaje: 'Usuario actualizado',
        usuario
    })
}

const usuarioDelete = async (req=request, res=response) => {
    const {id} = req.params;
    const usuarioAutenticado = req.usuario;

    //Para eliminar el registro
   /* const usuarioBorrado = await Usuario.findByIdAndDelete(id);

    res.json({
        mensaje: 'Usuario borrado correctamente',
        usuarioBorrado
    }) */

    //Para cambiar el estado a false
    const usuario = await Usuario.findById(id);

    if(!usuario.estado){
        return res.json({
            msg: "El usuario ya está inactivo",
        })
    }

    const usuarioInactivado = await Usuario.findByIdAndUpdate(id, {estado: false}, {new: true});

    res.json({
        mensaje: "Usuario inactivo",
        usuarioInactivado,
        usuarioAutenticado
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuarioPut,
    usuarioDelete
};