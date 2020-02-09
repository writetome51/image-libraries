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
		return this.__getGetRequestResult(params, 'get-all-images');
	}


	getLibrary(params: { sessionID: string, name: string }): Observable<any> {
		return this.__getGetRequestResult(params, 'get-library-images');
	}


	private __getGetRequestResult(params, uniqueRoute): Observable<any> {
		let urlQuery = this._getURLQuery(params);
		let url = `${this._baseURL}${uniqueRoute}${urlQuery}`;
		return this._http.get(url);
	}


}
