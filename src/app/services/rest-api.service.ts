import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { LibraryImage } from '../../types/library-image';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { superSecret } from '../../../.super-secret';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class RestAPIService {

	private __baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	private __requiredInEveryRequest = {secret: superSecret};


	constructor(private __http: HttpClient) {
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		let url = `${this.__baseURL}create-user`;
		return this.__getRequestResult('post', url, params);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		let url = `${this.__baseURL}delete-user` + this.__getRequiredURLQuery(params);
		return this.__http.delete(url);
	}


	getLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {

		let urlQuery = this.__getRequiredURLQuery(params);
		let url = `${this.__baseURL}get-library` + urlQuery;
		return this.__http.get(url);
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		let url = this.__getURLForGettingUser(params);
		return this.__http.get(url);
	}


	updateImage(
		params: {
			email: string, password: string,
			libraryName: string, imageIndex: number, image: LibraryImage
		}
	): Observable<any> {
		let url = `${this.__baseURL}update-image`;
		return this.__getRequestResult('patch', url, params);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, library: any[] }
	): Observable<any> {
		let url = `${this.__baseURL}update-library`;
		return this.__getRequestResult('patch', url, params);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string }
	): Observable<any> {
		let url = `${this.__baseURL}update-password`;
		return this.__getRequestResult('patch', url, params);
	}


	updateUser(
		params: { email: string, password: string, propToUpdate: string, newValue: any }
	): Observable<any> {
		let url = `${this.__baseURL}update-user`;
		return this.__getRequestResult('patch', url, params);
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
		return `${this.__baseURL}get-user` + urlQuery;
	}


}
