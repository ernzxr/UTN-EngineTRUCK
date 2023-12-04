const Joi = require('joi');
const validateRequest = require('../middlewares/validateRequest');

const validateCompatibleComponent = (req, res, next) => {
    const Schema = Joi.object({
        engine_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        }),
        component_id: Joi.number().integer().required().messages({
            "number.base":"El valor debe ser numérico"
        })
    });

    validateRequest(req, res, next, Schema);
};

module.exports = validateCompatibleComponent;