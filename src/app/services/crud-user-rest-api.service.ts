import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseRestAPIService } from './base-rest-api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
	providedIn: 'root'
})
export class CRUDUserRestAPIService extends BaseRestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		let url = this._getURLForGettingUser(params);
		return this._http.get(url);
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		let url = `${this._baseURL}create-user`;
		return this._getPostRequestResult(url, params);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		let url = `${this._baseURL}delete-user` + this._getRequiredURLQuery(params);
		return this._http.delete(url);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string }
	): Observable<any> {
		let url = `${this._baseURL}update-password`;
		return this._getPatchRequestResult(url, params);
	}


	updateEmail(
		params: { email: string, password: string, newEmail: string }
	): Observable<any> {
		let url = `${this._baseURL}update-email`;
		return this._getPatchRequestResult(url, params);
	}


}
