const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const validateManufacturer = (req, res, next) => {
    const Schema = Joi.object({
        manufacturer: Joi.string().max(45).required().messages({
            "any.required":"El nombre del fabricante es requerido",
            "string.empty":"El campo no puede quedar vacio",
            "string.max":"El maximo de caracteres es 45"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateManufacturer;