import { Injectable } from '@angular/core'
import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http'
import { catchError, Observable, of, throwError } from 'rxjs'

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(catchError(x => this.handleError(x)))
	}

	handleError(err: HttpErrorResponse): Observable<any> {
		if (err.status === 500) {
			console.log("Error server")
		}

		return throwError(() => err)
	}
}
