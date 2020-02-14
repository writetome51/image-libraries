import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from '../rest-api.service';


@Injectable({providedIn: 'root'})

export class ImagesRestApiService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	getAll(params: { sessionID: string }): Observable<any> {
		return this._getGetRequestResult('get-all-images', params);
	}


	getLibrary(params: { sessionID: string, name: string }): Observable<any> {
		return this._getGetRequestResult('get-library-images', params);
	}


	remove(params: { sessionID: string, imageNames: string[] }): Observable<any> {
		let url = `${this._baseURL}remove-images`;
		return this._getPatchRequestResult(url, params);
	}


}
