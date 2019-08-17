import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	private __getUserURL = `${this.__baseURL}get-user`; // GET
	private __createUserURL = `${this.__baseURL}create-user`; // POST
	private __createLibraryURL = `${this.__baseURL}create-library`; // PATCH
	private __deleteUserURL = `${this.__baseURL}delete-user`; // DELETE
	private __deleteLibraryURL = `${this.__baseURL}delete-library`; // DELETE
	private __changePasswordURL = `${this.__baseURL}change-password`; // PATCH
	private __requiredInEveryRequest = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	getUser(email, password): Observable<any> {
		let urlQuery = this.__getURLQuery({email, password});
		let url = this.__getUserURL + urlQuery;

		return this.__http.get(url);
	}


	createUser(email, password): Observable<any> {
		let body = this.__getRequestBody({email, password});
		return this.__http.post(this.__createUserURL, body);
	}


	createLibrary(
		email, password, library: { name: string, images: any[] }
	): Observable<any> {
		let body = this.__getRequestBody({email, password, library});
		return this.__http.patch(this.__createLibraryURL, body);
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


	private __getRequestBody(keyValuePairs): any {
		modifyObject(keyValuePairs, this.__requiredInEveryRequest);
		return keyValuePairs;
	}


}
