import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable } from 'rxjs'
import { Expert, ExpertSearch } from '../model/expert'

@Injectable({
	providedIn: 'root'
})
export class ExpertService {

	private httpOptions = {
		headers: new HttpHeaders({
		  'Accept': 'application/json'
		})
	}

	constructor(private http: HttpClient) {}

	launch(): Observable<Expert[]> {
		return new Observable<Expert[]>() 
	}

	launchSearch(): Observable<ExpertSearch> {
		return  new Observable<ExpertSearch>()
	}

	// all()
}
