const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const validateMedia = (req, res, next) => {
    const Schema = Joi.object({
        url: Joi.string().required().messages({
            "any.required":"La url es requerida",
            "string.empty":"El campo no puede quedar vacio"
        }),
        engine_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        component_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        type: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateMedia;