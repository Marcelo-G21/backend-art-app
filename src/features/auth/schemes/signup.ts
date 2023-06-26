import Joi, { ObjectSchema } from 'joi';

const signupSchema: ObjectSchema = Joi.object().keys({
	username: Joi.string().required().min(4).max(12).messages({
		'string.base': 'Username must be of type string',
		'string.min': 'Invalid username',
		'string.max': 'Invalid username',
		'string.empty': 'Username is a required field'
	}),
	password: Joi.string().required().min(4).max(10).messages({
		'string.base': 'Password must be a string',
		'string.min': 'Invalid password, too short',
		'string.max': 'Invalid password, too long',
		'string.empty': 'Password is a required field'
	}),
	email: Joi.string().required().email().messages({
		'string.base': 'Email must be of type string',
		'string.email': 'Email must be valid',
		'string.empty': 'Email is a required field'
	})
});

export { signupSchema };
