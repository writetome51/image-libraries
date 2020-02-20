import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from '../rest-api.service';
import { AppImage } from '../../interfaces/app-image';


@Injectable({providedIn: 'root'})

export class ImagesRestApiService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	getAllBatch(
		params: { sessionID: string, batchSize: number, batchNumber: number }
	): Observable<any> {
		return this._get('get-user-images-batch', params);
	}


	getLibraryBatch(
		params: { sessionID: string, name: string, batchSize: number, batchNumber: number }
	): Observable<any> {
		return this._get('get-library-images-batch', params);
	}


	add(params: { sessionID: string, images: AppImage[] }): Observable<any> {
		return this._post('add-images', params);
	}


	update(
		params: {
			sessionID: string,
			// `changes` can contain any property from AppImage
			images: { name: string, changes: object }[]
		}
	): Observable<any> {
		return this._patch('update-images', params);
	}


	remove(params: { sessionID: string, imageNames: string[] }): Observable<any> {
		return this._patch('remove-images', params);
	}


}
