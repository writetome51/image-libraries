import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from '../rest-api.service';


@Injectable({providedIn: 'root'})

export class LibraryRestApiService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	create(params: { sessionID: string, name: string }): Observable<any> {
		return this._getPostRequestResult('create-library', params);
	}


	get(params: { sessionID: string, name: string }): Observable<any> {
		return this._getGetRequestResult('get-library', params);
	}


	getLibraries(params: { sessionID: string }): Observable<any> {
		return this._getGetRequestResult('get-libraries', params);
	}


	update(
		// The properties in 'changes' can contain dot-notation.
		params: { sessionID: string, name: string, changes: any }
	): Observable<any> {
		return this._getPatchRequestResult('update-library', params);
	}


	delete(params: { sessionID: string, name: string }): Observable<any> {
		return this._getDeleteRequestResult('delete-library', params);
	}


}
