import { AppRestAPIService } from '../app-rest-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class UserRestAPIService {

	constructor(private __restApi: AppRestAPIService) {
	}


	exists(params: { email: string }): Observable<string> // JSON containing: {success: boolean}
	{
		return this.__restApi.get('user-exists', params);
	}


	get(
		params: { sessionID: string }
	): Observable<string> // JSON containing: DBUser | {error: {message: string}}
	{
		return this.__restApi.get('get-user', params);
	}


	create(
		params: {
			email: string, password: string, securityQuestion: { question: string, answer: string }
		}
	): Observable<string> // JSON containing:  DBUser | {error: {message: string}}
	{
		return this.__restApi.post('create-user', params);
	}


	delete(
		params: { email: string, password: string, sessionID: string }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this.__restApi.delete('delete-user', params);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string, sessionID: string }
	): Observable<string>  // JSON containing: DBUser | {error: {message: string}}
	{
		return this.__restApi.patch('update-password', params);
	}


	updateEmail(
		params: { email: string, password: string, newEmail: string, sessionID: string }
	): Observable<string> // JSON containing: DBUser | {error: {message: string}}
	{
		return this.__restApi.patch('update-email', params);
	}

}
