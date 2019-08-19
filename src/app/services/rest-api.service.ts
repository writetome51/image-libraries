import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService extends HttpClient {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	private __createLibraryURL = `${this.__baseURL}create-library`; // PATCH
	private __createUserURL = `${this.__baseURL}create-user`; // POST
	private __changePasswordURL = `${this.__baseURL}change-password`; // PATCH
	private __deleteLibraryURL = `${this.__baseURL}delete-library`; // DELETE
	private __deleteUserURL = `${this.__baseURL}delete-user`; // DELETE
	private __getUserURL = `${this.__baseURL}get-user`; // GET

	private __requiredInEveryRequest = {secret: superSecret};


	// HttpClient requires HttpHandler passed to its constructor.
	// Check angular documentation online to see if you must import another module in order
	// to have access to HttpHandler.
	constructor(__handler: HttpHandler) {
		super(__handler);
	}


	getURLForGettingUser(email, password) {
		let urlQuery = this.getURLQuery({email, password});
		return this.__getUserURL + urlQuery;
	}


	createUser(email, password): Observable<any> {
		return this.__getRequestResult(this.post, this.__createUserURL, {email, password});
	}


	createLibrary(
		email, password, library: { name: string, images: any[] }
	): Observable<any> {
		return this.__getRequestResult(
			this.patch, this.__createLibraryURL, {email, password, library}
		);
	}


	deleteUser(email, password): Observable<any> {
		let body = this.getModifiedBody({email, password});
		return this.delete(this.__deleteUserURL, {params: body});
	}


	deleteLibrary(email, password, libraryName): Observable<any> {
		let body = this.getModifiedBody({email, password, libraryName});
		return this.delete(this.__deleteLibraryURL, {params: body});
	}


	getURLQuery(keyValuePairs): string {
		modifyObject(keyValuePairs, this.__requiredInEveryRequest);
		return getURLQuery(keyValuePairs);
	}


	getModifiedBody(keyValuePairs): any {
		modifyObject(keyValuePairs, this.__requiredInEveryRequest);
		return keyValuePairs;
	}


	private __getRequestResult(requestFn, url, body): Observable<any> {
		body = this.getModifiedBody(body);
		if (requestFn === 'post') return this.post(url, body);
		if (requestFn === 'patch') return this.patch(url, body);
	}


}
