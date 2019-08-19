import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';


export class RestAPIService  {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	createUserURL = `${this.__baseURL}create-user`; // POST
	createLibraryURL = `${this.__baseURL}create-library`; // PATCH
	changePasswordURL = `${this.__baseURL}change-password`; // PATCH
	deleteLibraryURL = `${this.__baseURL}delete-library`; // DELETE
	deleteUserURL = `${this.__baseURL}delete-user`; // DELETE
	private __getUserURL = `${this.__baseURL}get-user`; // GET

	private __requiredInEveryRequest = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	getUser(email, password): Observable<any> {
		let url = this.__getURLForGettingUser(email, password);
		return this.__http.get(url);
	}


	getRequestResult(requestMethod, url, body): Observable<any> {
		body = this.__getRequiredBody(body);
		requestMethod = requestMethod.toLowerCase();

		if (requestMethod === 'post') return this.__http.post(url, body);
		if (requestMethod === 'patch') return this.__http.patch(url, body);
		if (requestMethod === 'delete') return this.__http.delete(url, {params: body});
	}


	private __getRequiredBody(keyValuePairsToAdd): any {
		modifyObject(keyValuePairsToAdd, this.__requiredInEveryRequest);
		return keyValuePairsToAdd;
	}


	private __getURLForGettingUser(email, password) {
		let urlQuery = this.__getRequiredURLQuery({email, password});
		return this.__getUserURL + urlQuery;
	}


	private __getRequiredURLQuery(keyValuePairsToAdd): string {
		modifyObject(keyValuePairsToAdd, this.__requiredInEveryRequest);
		return getURLQuery(keyValuePairsToAdd);
	}


}
