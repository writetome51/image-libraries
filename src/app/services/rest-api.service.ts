// @ts-ignore
const getObjectCopy = require('copy-object');
import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	private __getUserURL = `${this.__baseURL}get-user`;
	private __createUserURL = `${this.__baseURL}create-user`;
	private __createLibraryURL = `${this.__baseURL}create-library`;
	private __deleteUserURL = `${this.__baseURL}delete-user`;
	private __deleteLibraryURL = `${this.__baseURL}delete-library`;
	private __changePasswordURL = `${this.__baseURL}change-password`;
	private __body = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	getUser(email, password): Observable<any> {
		let parameters = this.__getRequestParameters({email, password});
		let url = this.__getUserURL + getURLQuery(parameters);

		return this.__http.get(url);
	}


	createUser(email, password): Observable<any> {
		modifyObject(this.__body, {email, password});
		return this.__http.post(this.__createUserURL, this.__body);
	}


	createLibrary(
		email, password, library: { name: string, images: any[] }
	): Observable<any> {
		modifyObject(this.__body, {email, password, library});
		return this.__http.patch(this.__createLibraryURL, this.__body);
	}


	deleteUser(email, password): Observable<any> {
		modifyObject(this.__body, {email, password});
		return this.__http.delete(url, {params: this.__body});
	}


	deleteLibrary(email, password, libraryName): Observable<any> {
		return this.__http.delete(url, {params: this.__body});
	}


	private __getRequestParameters(parametersToAdd): Object {
		modifyObject(parametersToAdd, this.__body);
		return parametersToAdd;
	}


	private __set_getQuery(keyValuePairs) {
		modifyObject(keyValuePairs, {secret: superSecret});

	}


}
