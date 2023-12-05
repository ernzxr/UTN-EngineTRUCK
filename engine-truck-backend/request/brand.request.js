const Joi = require('joi');
const validateRequest = require('../middlewares/validate.request.middleware');

const validateBrand = (req, res, next) => {
    const Schema = Joi.object({
        brand: Joi.string().max(45).required().messages({
            "any.required":"El nombre de la marca es requerida",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateBrand;