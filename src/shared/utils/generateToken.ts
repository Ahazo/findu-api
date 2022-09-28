import jwt from 'jsonwebtoken';

import authConfig from '../../config/auth';

export const generateToken = (id: string): string => {
	const { secret, expiresIn } = authConfig.jwt;

	return jwt.sign({ id }, secret, {
		expiresIn,
	});
};
