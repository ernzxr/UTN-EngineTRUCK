const validateRequest = (req, res, next, schema) => {
    const options = {
        abortEarly: false,
        stripUnknown: true
    }

    const {error, value} = schema.validate(req.body, options);

    if(error) {
        console.log(error);
        const errors = error.details.map((element) => {
            const errorMessage = {
                label:element.context.key,
                message:element.message
            }
            return errorMessage;
        })
        res.status(400).json({errors});
    }
    else {
        req.body = value;
        next();
    }
};

module.exports = validateRequest;