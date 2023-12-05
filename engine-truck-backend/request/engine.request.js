const Joi = require('joi');
const validateRequest = require('../middlewares/validate.request.middleware');

const validateEngine = (req, res, next) => {
    const Schema = Joi.object({
        model: Joi.string().max(45).required().messages({
            "any.required":"El nombre de motor es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        hidden: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        available: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        brand_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        manufacturer_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateEngine;