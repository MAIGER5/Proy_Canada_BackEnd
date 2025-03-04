const Joi = require('joi')

const clientSchema = Joi.object({
  name: Joi.string().required().messages({
      'string.empty': 'El nombre de la empresa es obligatorio'}),
  cedula: Joi.string().required().messages({
      'string.empty': 'El nombre de la empresa es obligatorio'}),
  mail: Joi.string().email().required().messages({
    'string.email': 'Debe ser un correo electrónico válido',
    'string.empty': 'El correo electrónico es obligatorio',
}),
  phone: Joi.string().required().messages({
      'string.empty': 'El nombre de la empresa es obligatorio'}),
  password: Joi.string().min(8).required().messages({
    'string.min': 'La contraseña debe tener al menos 8 caracteres',
    'string.empty': 'La contraseña es obligatoria',
})
})



const validateEmployeeMiddleware = (req, res, next) => {
  const { error } = clientSchema.validate(req.body, { abortEarly: false }); // Valida todos los campos

  if (error) {
      // Formatea los errores de Joi para que sean más legibles en el front-end
      const errors = error.details.map(detail => ({ message: detail.message, field: detail.path[0] }));
      return res.status(400).json({ errors });
  }

  next(); // Pasa al siguiente middleware si no hay errores
};

module.exports = validateEmployeeMiddleware;