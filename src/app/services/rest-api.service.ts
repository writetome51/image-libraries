import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	private __createUserURL = `${this.__baseURL}create-user`; // POST
	private __createLibraryURL = `${this.__baseURL}create-library`; // PATCH
	private __updateLibraryURL = `${this.__baseURL}update-library`; // PATCH
	private __updatePasswordURL = `${this.__baseURL}update-password`; // PATCH
	private __deleteLibraryURL = `${this.__baseURL}delete-library`; // DELETE
	private __deleteUserURL = `${this.__baseURL}delete-user`; // DELETE
	private __getUserURL = `${this.__baseURL}get-user`; // GET

	private __requiredInEveryRequest = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__getURLForGettingUser(params);
		return this.__http.get(url);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__deleteUserURL + this.__getRequiredURLQuery(params);
		return this.__http.delete(url);
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__createUserURL;
		return this.__getRequestResult('post', url, params);
	}


	changePassword(
		params: { email: string, password: string, newPassword: string }
	): Observable<any> {
		let url = this.__updatePasswordURL;
		return this.__getRequestResult('patch', url, params);
	}


	createLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {
		let url = this.__createLibraryURL;
		return this.__getRequestResult('patch', url, params);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, library: any[] }
	): Observable<any> {
		let url = this.__updateLibraryURL;
		return this.__getRequestResult('patch', url, params);
	}


	deleteLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {
		let url = this.__deleteLibraryURL + this.__getRequiredURLQuery(params);
		return this.__http.delete(url);
	}


	private __getRequestResult(requestMethod, url, body): Observable<any> {
		body = this.__getRequiredBody(body);

		requestMethod = requestMethod.toLowerCase();

		if (requestMethod === 'post') {
			return this.__http.post(url, body);
		}
		if (requestMethod === 'patch') {
			return this.__http.patch(url, body);
		}
	}


	private __getRequiredURLQuery(keyValuePairsToAdd): string {
		modifyObject(keyValuePairsToAdd, this.__requiredInEveryRequest);
		return getURLQuery(keyValuePairsToAdd);
	}


	private __getRequiredBody(keyValuePairsToAdd): any {
		modifyObject(keyValuePairsToAdd, this.__requiredInEveryRequest);
		return keyValuePairsToAdd;
	}


	private __getURLForGettingUser(params: { email: string, password: string }) {
		let urlQuery = this.__getRequiredURLQuery(params);
		return this.__getUserURL + urlQuery;
	}


}
