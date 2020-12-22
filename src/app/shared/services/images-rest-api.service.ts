import { AppRestAPIService } from './app-rest-api.service';
import { AppImage } from '@interfaces/app-image';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class ImagesRestAPIService {

	constructor(private __restApi: AppRestAPIService) {
	}


	getAllLoad(
		params: { sessionID: string, batchSize: number, batchNumber: number }
	): Observable<string> // JSON containing: ImageBatch | {error: {message: string}}
	{
		return this.__restApi.get('get-user-images-batch', params);
	}


	getLibraryLoad(
		params: { sessionID: string, name: string, batchSize: number, batchNumber: number }
	): Observable<string> // JSON containing: ImageBatch | {error: {message: string}}
	{
		return this.__restApi.get('get-library-images-batch', params);
	}


	add(
		params: { sessionID: string, images: AppImage[] }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this.__restApi.post('add-images', params);
	}


	update(
		params: {
			sessionID: string,

			// `changes` can contain any property from AppImage
			// The properties in 'changes' can contain dot-notation.
			images: { name: string, changes: object }[]
		}
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this.__restApi.patch('update-images', params);
	}


	delete(
		params: { sessionID: string, imageNames: string[] }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this.__restApi.patch('delete-images', params);
	}

}
