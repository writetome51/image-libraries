import { getURLQuery } from '@writetome51/get-url-query';
import { HttpClient } from '@angular/common/http';
import { modifyObject } from '@writetome51/modify-object';
import { Observable } from 'rxjs';
import { sss } from '../../.special/.sss';
import { CORSProxyData as corsProxy } from '../../../data-structures/read-only-data/cors-proxy.data';

/*************************

 export abstract class RestAPIService {

/******************
	protected _baseURL = corsProxy.data +
		'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';
*******************/

/********************

	private __corsProxy = 'https://writetome51-cors-proxy.herokuapp.com/';

	protected _baseURL = this.__corsProxy + 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/' +
		'serverless-functions-rhfqi/service/rest-api/incoming_webhook/';

	protected _requiredInEveryRequest = {secret: sss, 'api-key':'bca15348-6e88-4852-8915-b4a715af5bd8'};


	constructor(protected _http: HttpClient) {
	}


	protected _get(uniqueRoute, params): Observable<any> {
		return this.__request('get', uniqueRoute, params);
	}


	protected _delete(uniqueRoute, params): Observable<any> {
		return this.__request('delete', uniqueRoute, params);
	}


	protected _patch(uniqueRoute, params): Observable<any> {
		return this.__request('patch', uniqueRoute, params);
	}


	protected _post(uniqueRoute, params): Observable<any> {
		return this.__request('post', uniqueRoute, params);
	}


	private __request(
		requestMethod: 'post' | 'patch' | 'put' | 'get' | 'delete',
		uniqueRoute: string,
		params: object
	): Observable<any> {

		// @ts-ignore
		requestMethod = requestMethod.toLowerCase();
		let serviceURL = `${this._baseURL}${uniqueRoute}`;
		let args;
		// To work with your own cors-proxy deployed on herokuapp,
		// set the actual service URL in a header named 'Target-Endpoint':
		let options = {headers: {'Target-Endpoint': serviceURL, 'target-endpoint':serviceURL,
				'Target-URL': serviceURL
		}};

		if (['post', 'patch', 'put'].includes(requestMethod)) {
			params = this.__makeSureItHasDefaultRequiredProperties(params);
			args = [serviceURL, params, options];
		}
		else {
			options.headers['Target-Endpoint'] += this.__getURLQuery(params);
			options.headers['target-endpoint'] += this.__getURLQuery(params);
			options.headers['Target-URL'] += this.__getURLQuery(params);
			args = [this.__corsProxy, options];
		}
		console.log(options.headers);
		// @ts-ignore
		return this._http[requestMethod](...args);
	}


	// Returns url query that begins with '?'

	private __getURLQuery(params): string {
		params = this.__makeSureItHasDefaultRequiredProperties(params);
		return getURLQuery(params);
	}


	private __makeSureItHasDefaultRequiredProperties(params): object {
		modifyObject(params, this._requiredInEveryRequest);
		if (params['sessionID'] === undefined) params['sessionID'] = '';

		return params;
	}


}

************************/
