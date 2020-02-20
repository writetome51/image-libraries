import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from '../rest-api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({providedIn: 'root'})

export class UserRestAPIService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	exists(params: { email: string }): Observable<any> {
		return this._get('user-exists', params);
	}


	get(params: { sessionID: string }): Observable<any> {
		return this._get('get-user', params);
	}


	create(
		params: {
			email: string, password: string,
			securityQuestion: { question: string, answer: string }
		}
	): Observable<any> {
		return this._post('create-user', params);
	}


	delete(params: { email: string, password: string, sessionID: string }): Observable<any> {
		return this._delete('delete-user', params);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string, sessionID: string }
	): Observable<any> {
		return this._patch('update-password', params);
	}


	updateEmail(
		params: { email: string, password: string, newEmail: string, sessionID: string }
	): Observable<any> {
		return this._patch('update-email', params);
	}


}
