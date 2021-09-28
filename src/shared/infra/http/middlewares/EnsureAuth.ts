import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import auth from '../../../../config/auth';

interface ITokenPayload {
	id: number;
	iat: number;
	exp: number;
}

export default async function ensureAuth(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const token = request.headers.authorization;

		if (!token) {
			return response.status(400).json('User not found');
			// const instanceError = new AppError();
			// return instanceError.userNotFound();
		}

		const decoded = jwt.verify(token, auth.jwt.secret);
		const { id } = decoded as ITokenPayload;

		request.userId = id;

		next();
	} catch (err) {
		return response.status(500).json({
			errorMessage: err.message,
		});
	}
}
