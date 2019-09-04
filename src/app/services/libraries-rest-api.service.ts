import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class LibrariesRestAPIService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	createLibrary(
		params: { email: string, password: string, name: string }
	): Observable<any> {

		let urlQuery = this._getRequiredURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	getLibrary(
		params: { email: string, password: string, name: string }
	): Observable<any> {

		let urlQuery = this._getRequiredURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	updateLibrary(
		// The properties in 'changes' can contain dot-notation.
		params: { email: string, password: string, name: string, changes: any }
	): Observable<any> {
		let url = `${this._baseURL}update-library`;
		return this._getPatchRequestResult(url, params);
	}


}
