import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from '../rest-api.service';
import { SecurityQuestion } from '../../../../interfaces/security-question';


@Injectable({providedIn: 'root'})

export class AuthenticationRestAPIService extends RestAPIService {

	constructor(_http: HttpClient) {
		super(_http);
	}


	login(
		params: { email: string, password: string }
	): Observable<string> // JSON containing:  DBUser | {error: {message: string}}
	{
		return this._patch('user-login', params);
	}


	securityQuestionLogin(
		params: { email: string, securityQuestion: SecurityQuestion }
	): Observable<string> // JSON containing:  DBUser | {error: {message: string}}
	{
		return this._patch('security-question-login', params);
	}


	logout(
		params: { sessionID: string }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this._patch('user-logout', params);
	}


	getSecurityQuestion(
		params: { email: string }
	): Observable<string> // JSON containing: SecurityQuestion | {error: {message: string}}
	{
		return this._get('get-security-question', params);
	}


}
