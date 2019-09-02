import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppImage } from '../../types/app-image';
import { Observable } from 'rxjs';
import { BaseRestAPIService } from './base-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class RestAPIService extends BaseRestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	updateImage(
		params: {
			email: string, password: string,
			libraryName: string, imageIndex: number, newValue: AppImage
		}
	): Observable<any> {
		let url = `${this._baseURL}update-image`;
		return this._getPatchRequestResult(url, params);
	}


	getLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {

		let urlQuery = this._getRequiredURLQuery(params);
		let url = `${this._baseURL}get-library` + urlQuery;
		return this._http.get(url);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, newValue: any[] }
	): Observable<any> {
		let url = `${this._baseURL}update-library`;
		return this._getPatchRequestResult(url, params);
	}


	updateLibraries(
		params: { email: string, password: string, newValue: any }
	): Observable<any> {
		let url = `${this._baseURL}update-libraries`;
		return this._getPatchRequestResult(url, params);
	}


}
