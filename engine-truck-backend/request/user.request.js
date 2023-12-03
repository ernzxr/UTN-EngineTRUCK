const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const validateUser = (req, res, next) => {
    const Schema = Joi.object({
        email: Joi.string().max(45).email().required().messages({
            "any.required":"El correo electronico es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.email":"Ingrese un correo electronico valido",
            "string.max":"El maximo de caracteres es 45"
        }),
        user: Joi.string().max(45).required().messages({
            "any.required":"El nombre de usuario es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        password: Joi.string().required().messages({
            "any.required":"Las contraseña es requerida",
            "string.empty":"El campo no puede quedar vacio"
        }),
        name: Joi.string().max(45).required().messages({
            "any.required":"El nombre es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        last_name: Joi.string().max(45).required().messages({
            "any.required":"El apellido es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        type_user: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser un numero"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateUser;