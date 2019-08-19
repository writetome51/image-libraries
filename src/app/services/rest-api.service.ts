import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	private __createLibraryURL = `${this.__baseURL}create-library`; // PATCH
	private __createUserURL = `${this.__baseURL}create-user`; // POST
	private __changePasswordURL = `${this.__baseURL}change-password`; // PATCH
	private __deleteLibraryURL = `${this.__baseURL}delete-library`; // DELETE
	private __deleteUserURL = `${this.__baseURL}delete-user`; // DELETE
	private __getUserURL = `${this.__baseURL}get-user`; // GET

	private __requiredInEveryRequest = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	getUser(email, password): Observable<any> {
		let urlQuery = this.__getURLQuery({email, password});

		return this.__http.get(this.__getUserURL + urlQuery);
	}


	createUser(email, password): Observable<any> {
		return this.__getRequestResult(this.__http.post, this.__createUserURL, {email, password});
	}


	createLibrary(
		email, password, library: { name: string, images: any[] }
	): Observable<any> {
		return this.__getRequestResult(
			this.__http.patch, this.__createLibraryURL, {email, password, library}
		);
	}


	deleteUser(email, password): Observable<any> {
		let body = this.__getRequestBody({email, password});
		return this.__http.delete(this.__deleteUserURL, {params: body});
	}


	deleteLibrary(email, password, libraryName): Observable<any> {
		let body = this.__getRequestBody({email, password, libraryName});
		return this.__http.delete(this.__deleteLibraryURL, {params: body});
	}


	private __getURLQuery(keyValuePairs): string {
		modifyObject(keyValuePairs, this.__requiredInEveryRequest);
		return getURLQuery(keyValuePairs);
	}


	private __getRequestResult(requestFn, url, body): Observable<any> {
		body = this.__getRequestBody(body);
		return requestFn(url, body);
	}


	private __getRequestBody(keyValuePairs): any {
		modifyObject(keyValuePairs, this.__requiredInEveryRequest);
		return keyValuePairs;
	}


}
