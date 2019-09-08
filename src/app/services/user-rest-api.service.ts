import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class UserRestAPIService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	get(params: { sessionID: string }): Observable<any> {
		let url = this.__getURLForGettingUser(params);
		return this._http.get(url);
	}


	create(
		params: {
			email: string, password: string,
			securityQuestion: { question: string, answer: string }
		}
	): Observable<any> {
		params['sessionID'] = '';
		let url = `${this._baseURL}create-user`;
		return this._getPostRequestResult(url, params);
	}


	delete(params: { email: string, password: string, sessionID: string }): Observable<any> {
		let url = `${this._baseURL}delete-user` + this._getURLQuery(params);
		return this._http.delete(url);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string, sessionID: string }
	): Observable<any> {
		let url = `${this._baseURL}update-password`;
		return this._getPatchRequestResult(url, params);
	}


	updateEmail(
		params: { email: string, password: string, newEmail: string, sessionID: string }
	): Observable<any> {
		let url = `${this._baseURL}update-email`;
		return this._getPatchRequestResult(url, params);
	}


	private __getURLForGettingUser(params: { sessionID: string }) {
		let urlQuery = this._getURLQuery(params);
		return `${this._baseURL}get-user` + urlQuery;
	}


}
