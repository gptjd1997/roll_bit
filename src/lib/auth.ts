import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export function generateToken(user) {
	if (!process.env.SECRET_KEY) {
		throw new Error('SECRET_KEY is not defined');
	}
	'generateToken', user;
	const payload = { id: user.id, name: user.name, email: user.email };
	return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

export function verifyToken(token) {
	try {
		if (!process.env.SECRET_KEY) {
			throw new Error('SECRET_KEY is not defined');
		}
		return jwt.verify(token, SECRET_KEY);
	} catch (err) {
		return null;
	}
}
