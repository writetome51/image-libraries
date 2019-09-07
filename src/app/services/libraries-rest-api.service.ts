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
		params: { sessionID: string, name: string }
	): Observable<any> {
		let url = `${this._baseURL}create-library`;
		return this._getPostRequestResult(url, params);
	}


	getLibrary(
		params: { sessionID: string, name: string }
	): Observable<any> {

		let urlQuery = this._getURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	updateLibrary(
		// The properties in 'changes' can contain dot-notation.
		params: { sessionID: string, name: string, changes: any }
	): Observable<any> {
		let url = `${this._baseURL}update-library`;
		return this._getPatchRequestResult(url, params);
	}


	deleteLibrary(params: { sessionID: string, name: string }): Observable<any> {
		let url = `${this._baseURL}delete-library` + this._getURLQuery(params);
		return this._http.delete(url);
	}


}
