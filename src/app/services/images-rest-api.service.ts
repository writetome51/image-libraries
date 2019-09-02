import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppImage } from '../../types/app-image';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class ImagesRestAPIService extends RestAPIService {


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


	// Use this to create or delete images.

	updateLibrary(
		params: { email: string, password: string, libraryName: string, newValue: any[] }
	): Observable<any> {
		let url = `${this._baseURL}update-library`;
		return this._getPatchRequestResult(url, params);
	}


}
