/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
	interface Request {
		userId: number;
	}

	interface IncomingHttpHeaders {
		token: string;
	}
}
