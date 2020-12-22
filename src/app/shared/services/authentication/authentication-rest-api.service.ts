import { AppRestAPIService } from '../app-rest-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurityQuestion } from '@interfaces/security-question';


@Injectable({providedIn: 'root'})
export class AuthenticationRestAPIService {

	constructor(private __restApi: AppRestAPIService) {
	}


	login(
		params: { email: string, password: string }
	): Observable<string> // JSON containing:  DBUser | {error: {message: string}}
	{
		return this.__restApi.patch('user-login', params);
	}


	securityQuestionLogin(
		params: { email: string, securityQuestion: SecurityQuestion }
	): Observable<string> // JSON containing:  DBUser | {error: {message: string}}
	{
		return this.__restApi.patch('security-question-login', params);
	}


	logout(
		params: { sessionID: string }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this.__restApi.patch('user-logout', params);
	}


	getSecurityQuestion(
		params: { email: string }
	): Observable<string> // JSON containing: SecurityQuestion | {error: {message: string}}
	{
		return this.__restApi.get('get-security-question', params);
	}


}
