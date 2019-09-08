import { Injectable } from '@angular/core';
import { RestAPIService } from './rest-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationRestAPIService extends RestAPIService {

	constructor(_http: HttpClient) {
		super(_http);
	}


	login(params: { email: string, password: string }): Observable<any> {
		let url = `${this._baseURL}user-login`;
		params['sessionID'] = '';
		return this._getPatchRequestResult(url, params);
	}


	logout(params: { sessionID: string }): Observable<any> {
		let url = `${this._baseURL}user-logout`;
		return this._getPatchRequestResult(url, params);
	}


}
