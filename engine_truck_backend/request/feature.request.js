const Joi = require('joi');
const validateRequest = require('../middlewares/validate.request.middleware');

const validateFeature = (req, res, next) => {
    const Schema = Joi.object({
        feature_name: Joi.string().max(45).required().messages({
            "any.required":"El nombre de la caracteristica es requerida",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        hidden: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateFeature;