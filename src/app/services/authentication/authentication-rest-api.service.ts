import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from '../rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class AuthenticationRestAPIService extends RestAPIService {

	constructor(_http: HttpClient) {
		super(_http);
	}


	login(params: { email: string, password: string }): Observable<any> {
		let url = `${this._baseURL}user-login`;
		return this.__getPatchRequestResult_currentlyLoggedOut(url, params);
	}


	securityQuestionLogin(
		params: { email: string, securityQuestion: { question: string, answer: string } }
	): Observable<any> {
		let url = `${this._baseURL}security-question-login`;
		return this.__getPatchRequestResult_currentlyLoggedOut(url, params);
	}


	logout(params: { sessionID: string }): Observable<any> {
		let url = `${this._baseURL}user-logout`;
		return this._getPatchRequestResult(url, params);
	}


	private __getPatchRequestResult_currentlyLoggedOut(url, params): Observable<any> {
		params['sessionID'] = ''; // because currently logged out.
		return this._getPatchRequestResult(url, params);
	}

}
