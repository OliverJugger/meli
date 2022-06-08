import { Injectable } from '@angular/core'
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http'

import { Observable } from 'rxjs'

/**
 * Add a random query param to any http GET request to bypass Akamai cache.
 *
 * @export
 * @class CacheNukerInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class CacheNukerInterceptor implements HttpInterceptor {
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		if (
			req.method === 'GET')
		{
			return next.handle(
				req.clone({ setParams: { t: Date.now().toString() } })
			)
		}

		return next.handle(req)
	}
}
