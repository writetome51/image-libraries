import { getURLQuery } from '@writetome51/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { sss } from '../../assets/.sss';


export abstract class RestAPIService {

	private __corsProxy = 'https://cors-anywhere.herokuapp.com/';

	protected _baseURL = this.__corsProxy +
		'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	protected _requiredInEveryRequest = {secret: sss};


	constructor(protected _http: HttpClient) {
	}


	protected _getGetRequestResult(uniqueRoute, params): Observable<any> {
		return this.__getURLQueryRequestResult('get', uniqueRoute, params);
	}


	protected _getDeleteRequestResult(uniqueRoute, params): Observable<any> {
		return this.__getURLQueryRequestResult('delete', uniqueRoute, params);
	}


	protected _getPatchRequestResult(uniqueRoute, params): Observable<any> {
		return this.__getBodyRequestResult('patch', uniqueRoute, params);
	}


	protected _getPostRequestResult(uniqueRoute, params): Observable<any> {
		return this.__getBodyRequestResult('post', uniqueRoute, params);
	}


	private __getURLQueryRequestResult(
		requestMethod: 'get' | 'delete',
		uniqueRoute,
		params
	): Observable<any> {
		// @ts-ignore
		requestMethod = requestMethod.toLowerCase();

		let urlQuery = this.__getURLQuery(params);
		let url = `${this._baseURL}${uniqueRoute}${urlQuery}`;
		return this._http[requestMethod](url);
	}


	private __getBodyRequestResult(
		requestMethod: 'post' | 'patch' | 'put',
		uniqueRoute,
		body
	): Observable<any> {
		// @ts-ignore
		requestMethod = requestMethod.toLowerCase();

		body = this.__getRequiredBody(body);
		let url = `${this._baseURL}${uniqueRoute}`;
		return this._http[requestMethod](url, body);
	}


	private __getRequiredBody(keyValuePairsToAdd): any {
		modifyObject(keyValuePairsToAdd, this._requiredInEveryRequest);
		return keyValuePairsToAdd;
	}


	private __getURLQuery(keyValuePairsToAdd): string {
		modifyObject(keyValuePairsToAdd, this._requiredInEveryRequest);
		return getURLQuery(keyValuePairsToAdd);
	}


}
