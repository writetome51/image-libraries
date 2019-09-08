import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryRestApiService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	create(params: { sessionID: string, name: string }): Observable<any> {
		let url = `${this._baseURL}create-library`;
		return this._getPostRequestResult(url, params);
	}


	get(params: { sessionID: string, name: string }): Observable<any> {

		let urlQuery = this._getURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	getLibraries(params: { sessionID: string }): Observable<any> {
		let urlQuery = this._getURLQuery(params);
		let url = `${this._baseURL}get-libraries` + urlQuery;
		return this._http.get(url);
	}


	update(
		// The properties in 'changes' can contain dot-notation.
		params: { sessionID: string, name: string, changes: any }
	): Observable<any> {
		let url = `${this._baseURL}update-library`;
		return this._getPatchRequestResult(url, params);
	}


	delete(params: { sessionID: string, name: string }): Observable<any> {
		let url = `${this._baseURL}delete-library` + this._getURLQuery(params);
		return this._http.delete(url);
	}


}
