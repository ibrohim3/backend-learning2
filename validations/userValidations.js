const Joi = require("joi")

exports.validateUser = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required()
    })

    return schema.validate(data)
}
