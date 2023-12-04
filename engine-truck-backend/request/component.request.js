const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const validateComponent = (req, res, next) => {
    const Schema = Joi.object({
        component: Joi.string().max(45).required().messages({
            "any.required":"El nombre del componente es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        description: Joi.string().required().messages({
            "any.required":"La descripcion es requerida",
            "string.empty":"El campo no puede quedar vacio"
        }),
        hidden: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        available: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateComponent;