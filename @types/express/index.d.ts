/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
/* eslint-disable @typescript-eslint/naming-convention */

declare namespace Express {
	export interface Request {
		userId: number;
	}

	export interface IncomingHttpHeaders {
		token: string;
	}
}
