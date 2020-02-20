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
		// url query must contain 'sessionID', though here it doesn't need a value.
		params['sessionID'] = '';
		return this._getGetRequestResult('user-exists', params);
	}


	get(params: { sessionID: string }): Observable<any> {
		return this._getGetRequestResult('get-user', params);
	}


	create(
		params: {
			email: string, password: string,
			securityQuestion: { question: string, answer: string }
		}
	): Observable<any> {
		// request body must contain 'sessionID', though here it doesn't need a value.
		params['sessionID'] = '';
		return this._getPostRequestResult('create-user', params);
	}


	delete(params: { email: string, password: string, sessionID: string }): Observable<any> {
		return this._getDeleteRequestResult('delete-user', params);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string, sessionID: string }
	): Observable<any> {
		return this._getPatchRequestResult('update-password', params);
	}


	updateEmail(
		params: { email: string, password: string, newEmail: string, sessionID: string }
	): Observable<any> {
		return this._getPatchRequestResult('update-email', params);
	}


}
