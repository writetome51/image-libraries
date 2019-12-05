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


	protected _getURLQuery(keyValuePairsToAdd): string {
		modifyObject(keyValuePairsToAdd, this._requiredInEveryRequest);
		return getURLQuery(keyValuePairsToAdd);
	}


	protected _getRequiredBody(keyValuePairsToAdd): any {
		modifyObject(keyValuePairsToAdd, this._requiredInEveryRequest);
		return keyValuePairsToAdd;
	}


	protected _getPatchRequestResult(url, body): Observable<any> {
		return this.__getRequestResult('patch', url, body);
	}


	protected _getPostRequestResult(url, body): Observable<any> {
		return this.__getRequestResult('post', url, body);
	}


	private __getRequestResult(
		requestMethod: 'post' | 'patch',
		url,
		body
	): Observable<any> {

		body = this._getRequiredBody(body);
		// @ts-ignore
		requestMethod = requestMethod.toLowerCase();

		return this._http[requestMethod](url, body);
	}


}
