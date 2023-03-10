/* 
    Schema que controla el tipo de dato del password de borrado del usuario
*/

const Joi = require('joi');

const delPassSchema = Joi.object().keys({
    password: Joi.string()
        .required()
        .min(5)
        .max(10)
        .regex(/[A-Za-z0-9]/)
        .error((errors) => {
            if (
                errors[0].code === 'any.required' ||
                errors[0].code === 'string.empty'
            ) {
                return new Error('¡El password es requerido!');
            } else {
                return new Error(
                    '¡El password debe tener entre 5 y 10 caracteres de longitud!'
                );
            }
        }),
});

module.exports = delPassSchema;
