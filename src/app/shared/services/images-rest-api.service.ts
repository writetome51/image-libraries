import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { AppImage } from '@interfaces/app-image';


@Injectable({providedIn: 'root'})

export class ImagesRestAPIService extends RestAPIService {


	constructor(_http: HttpClient) {
		super(_http);
	}


	getAllLoad(
		params: { sessionID: string, batchSize: number, batchNumber: number }
	): Observable<string> // JSON containing: ImageBatch | {error: {message: string}}
	{
		return this._get('get-user-images-batch', params);
	}


	getLibraryLoad(
		params: { sessionID: string, name: string, batchSize: number, batchNumber: number }
	): Observable<string> // JSON containing: ImageBatch | {error: {message: string}}
	{
		return this._get('get-library-images-batch', params);
	}


	add(
		params: { sessionID: string, images: AppImage[] }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this._post('add-images', params);
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
		return this._patch('update-images', params);
	}


	delete(
		params: { sessionID: string, imageNames: string[] }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this._patch('delete-images', params);
	}


}
