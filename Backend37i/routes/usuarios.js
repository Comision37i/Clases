const { Router } = require('express');
const { check } = require('express-validator');
const { usuariosGet, usuariosPost, usuarioPut, usuarioDelete} = require('../controllers/usuarios');
const { emailExiste, esRolValido } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar_campos');

const router = Router();

router.get('/', usuariosGet);

router.post('/', [
        check('nombre', 'El nombre es obligatorio').notEmpty(),
        check('password', 'La contraseña  debe tener un mínimo de 6 caracteres').isLength({min:6}),
        check('correo').custom(emailExiste),
        check('rol').custom(esRolValido),
        validarCampos
    ], 
    usuariosPost
);

router.put('/:id', usuarioPut);

router.delete('/:id', usuarioDelete);

module.exports = router;