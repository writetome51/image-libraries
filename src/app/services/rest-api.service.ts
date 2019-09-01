import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibraryImage } from '../../types/library-image';
import { Observable } from 'rxjs';
import { BaseRestAPIService } from './base-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class RestAPIService extends BaseRestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		let url = `${this._baseURL}create-user`;
		return this._getPostRequestResult(url, params);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		let url = `${this._baseURL}delete-user` + this._getRequiredURLQuery(params);
		return this._http.delete(url);
	}


	getLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {

		let urlQuery = this._getRequiredURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		let url = this._getURLForGettingUser(params);
		return this._http.get(url);
	}


	updateImage(
		params: {
			email: string, password: string,
			libraryName: string, imageIndex: number, newValue: LibraryImage
		}
	): Observable<any> {
		let url = `${this._baseURL}update-image`;
		return this._getPatchRequestResult(url, params);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, newValue: any[] }
	): Observable<any> {
		let url = `${this._baseURL}update-library`;
		return this._getPatchRequestResult(url, params);
	}


	updateLibraries(
		params: { email: string, password: string, newValue: any }
	): Observable<any> {
		let url = `${this._baseURL}update-libraries`;
		return this._getPatchRequestResult(url, params);
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


	userLogin(
		params: { email: string, password: string }
	): Observable<any> {
		let url = `${this._baseURL}user-login`;
		return this._getPatchRequestResult(url, params);
	}


	userLogout(
		params: { email: string, password: string }
	): Observable<any> {
		let url = `${this._baseURL}user-logout`;
		return this._getPatchRequestResult(url, params);
	}


}
