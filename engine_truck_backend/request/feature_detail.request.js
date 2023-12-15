const Joi = require('joi');
const validateRequest = require('../middlewares/validate.request.middleware');

const validateFeatureDetail = (req, res, next) => {
    const Schema = Joi.object({
        feature_value: Joi.string().max(45).required().messages({
            "any.required":"El valor de la caracteristica es requerida",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        }),
        engine_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        feature_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateFeatureDetail;