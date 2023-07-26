const Usuario = require('../models/usuario');
const Rol = require('../models/rol');

//Validar el email
const emailExiste = async(correo) => {
    const existeEmail = await Usuario.findOne({correo})
    if(existeEmail){
        throw new Error(`El correo ${correo} ya se encuentra registrado`);
    }
}

//Validar el Rol
const esRolValido = async (rol) => {
    const existeRol = await Rol.findOne({rol})

    if(!existeRol){
        throw new Error(`El rol ${rol} no existe en la bade de datos`);
    }
}

//Si existe el usuario por id
const usuarioExiste = async(id) => {
    const existeUsuario = await Usuario.findById(id)

    if(!existeUsuario){
        throw new Error(`El id ${id} no corresponde a ningún usuario registrado`)
    }
}

module.exports = {
    emailExiste,
    esRolValido,
    usuarioExiste
}