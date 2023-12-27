const Joi = require('joi');
const validateRequest = require('../middlewares/validate.request.middleware');

const validateMedia = (req, res, next) => {
    const Schema = Joi.object({
        file: Joi.string(),
        engine_id: Joi.number().integer().required().messages({
            "any.required":"Campo requerido",
            "number.base":"El valor debe ser numérico"
        }),
        component_id: Joi.number().integer().required().messages({
            "any.required":"Campo requerido",
            "number.base":"El valor debe ser numérico"
        }),
        media_type: Joi.number().integer().required().messages({
            "any.required":"Indicar si es video o image es requerido",
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateMedia;