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
		return this.http.get<Expert[]>('http://localhost:8888/cgi-bin/all.py', this.httpOptions) 
	}

	launchSearch(): Observable<ExpertSearch> {
		return this.http.get<ExpertSearch>('http://localhost:8888/cgi-bin/main.py', this.httpOptions)
	}

	// all()
}
