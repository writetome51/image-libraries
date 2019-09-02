import { getURLQuery } from '../../functions/get-url-query';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { sss } from '../../../.super-secret';


@Injectable({
	providedIn: 'root'
})
export class RestAPIService {

	protected _baseURL = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	protected _requiredInEveryRequest = {secret: sss};


	constructor(protected _http: HttpClient) {
	}


	protected _getPatchRequestResult(url, body): Observable<any> {
		return this._getRequestResult('patch', url, body);
	}


	protected _getPostRequestResult(url, body): Observable<any> {
		return this._getRequestResult('post', url, body);
	}


	protected _getRequestResult(requestMethod, url, body): Observable<any> {
		body = this._getRequiredBody(body);

		requestMethod = requestMethod.toLowerCase();

		if (requestMethod === 'post') {
			return this._http.post(url, body);
		}
		if (requestMethod === 'patch') {
			return this._http.patch(url, body);
		}
	}


	protected _getRequiredURLQuery(keyValuePairsToAdd): string {
		modifyObject(keyValuePairsToAdd, this._requiredInEveryRequest);
		return getURLQuery(keyValuePairsToAdd);
	}


	protected _getRequiredBody(keyValuePairsToAdd): any {
		modifyObject(keyValuePairsToAdd, this._requiredInEveryRequest);
		return keyValuePairsToAdd;
	}


	protected _getURLForGettingUser(params: { email: string, password: string }) {
		let urlQuery = this._getRequiredURLQuery(params);
		return `${this._baseURL}get-user` + urlQuery;
	}


}
