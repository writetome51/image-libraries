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


	getLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {

		let urlQuery = this._getRequiredURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	// Use this to create and delete a library.

	update(
		params: { email: string, password: string, newValue: any }
	): Observable<any> {
		let url = `${this._baseURL}update-libraries`;
		return this._getPatchRequestResult(url, params);
	}


}
