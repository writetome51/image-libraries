import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	createUserURL = `${this.__baseURL}create-user`; // POST
	createLibraryURL = `${this.__baseURL}create-library`; // PATCH
	updateLibraryURL = `${this.__baseURL}update-library`; // PATCH
	changePasswordURL = `${this.__baseURL}change-password`; // PATCH
	deleteLibraryURL = `${this.__baseURL}delete-library`; // DELETE
	deleteUserURL = `${this.__baseURL}delete-user`; // DELETE
	private __getUserURL = `${this.__baseURL}get-user`; // GET

	private __requiredInEveryRequest = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__getURLForGettingUser(params);
		return this.__http.get(url);
	}


	getRequestResult(requestMethod, url, body?): Observable<any> {
		if (body) {
			body = this.__getRequiredBody(body);
		}
		requestMethod = requestMethod.toLowerCase();

		if (requestMethod === 'post') {
			return this.__http.post(url, body);
		}
		if (requestMethod === 'patch') {
			return this.__http.patch(url, body);
		}
		if (requestMethod === 'delete') {
			return this.__http.delete(url);
		}
	}


	getRequiredURLQuery(keyValuePairsToAdd): string {
		modifyObject(keyValuePairsToAdd, this.__requiredInEveryRequest);
		return getURLQuery(keyValuePairsToAdd);
	}


	private __getRequiredBody(keyValuePairsToAdd): any {
		modifyObject(keyValuePairsToAdd, this.__requiredInEveryRequest);
		return keyValuePairsToAdd;
	}


	private __getURLForGettingUser(params: { email: string, password: string }) {
		let urlQuery = this.getRequiredURLQuery(params);
		return this.__getUserURL + urlQuery;
	}


}
