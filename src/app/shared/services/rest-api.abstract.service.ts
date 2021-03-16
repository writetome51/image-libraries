import { getURLQuery } from '@writetome51/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';


export abstract class RestAPIService {

	protected abstract _baseURL: string;
	protected abstract _requiredInEveryRequestBody: object;


	constructor(private __http: HttpClient) {
	}


	get(uniqueRoute, params): Observable<any> {
		return this.__request('get', uniqueRoute, params);
	}


	delete(uniqueRoute, params): Observable<any> {
		return this.__request('delete', uniqueRoute, params);
	}


	patch(uniqueRoute, params): Observable<any> {
		return this.__request('patch', uniqueRoute, params);
	}


	post(uniqueRoute, params): Observable<any> {
		return this.__request('post', uniqueRoute, params);
	}


	private __request(
		requestMethod: 'post' | 'patch' | 'put' | 'get' | 'delete',
		uniqueRoute: string,
		params: object
	): Observable<any> {

		// @ts-ignore
		requestMethod = requestMethod.toLowerCase();
		let url = `${this._baseURL}${uniqueRoute}`;
		let args;

		if (['post', 'patch', 'put'].includes(requestMethod)) {
			modifyObject(params, this._requiredInEveryRequestBody);
			args = [url, params];
		}
		else {
			url += getURLQuery(params);
			args = [url];
		}
		// @ts-ignore
		return this.__http[requestMethod](...args);
	}

}
