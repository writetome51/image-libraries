import { Injectable } from '@angular/core';
import { BaseRestAPIService } from './base-rest-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationRestAPIService extends BaseRestAPIService {

	constructor(_http: HttpClient) {
		super(_http);
	}


	login(
		params: { email: string, password: string }
	): Observable<any> {
		let url = `${this._baseURL}user-login`;
		return this._getPatchRequestResult(url, params);
	}


	logout(
		params: { email: string, password: string }
	): Observable<any> {
		let url = `${this._baseURL}user-logout`;
		return this._getPatchRequestResult(url, params);
	}


}
