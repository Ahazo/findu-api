/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import auth from '../../../../config/auth';

interface ITokenPayload {
	id: string;
	iat: number;
	exp: number;
}

export default async function ensureAuth(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		const token = request.headers.authorization?.replace('Bearer ', '');

		if (!token) {
			return response.status(400).json('User not found');
			// const instanceError = new AppError();
			// return instanceError.userNotFound();
		}

		const decoded = jwt.verify(token, auth.jwt.secret);
		const { id } = decoded as ITokenPayload;

		request.userId = id;

		next();
	} catch (error) {
		let message;
		if (error instanceof Error) message = error.message;
		else message = String(error);

		return response.status(500).json({
			errorMessage: message,
		});
	}
}
