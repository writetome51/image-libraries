import { AppRestAPIService } from '../app-rest-api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class LibraryRestAPIService {


	constructor(private __restApi: AppRestAPIService) {
	}


	create(
		params: { sessionID: string, name: string }
	): Observable<string> // JSON containing: DBLibrary | {error: {message: string}}
	{
		return this.__restApi.post('create-library', params);
	}


	get(
		params: { sessionID: string, name: string }
	): Observable<string> // JSON containing: DBLibrary | {error: {message: string}}
	{
		return this.__restApi.get('get-library', params);
	}


	getLibraries(
		params: { sessionID: string }
	): Observable<string>  // JSON containing: DBLibrary[] | {error: {message: string}}
	{
		return this.__restApi.get('get-libraries', params);
	}


	update(
		// The properties in 'changes' can contain dot-notation.
		params: { sessionID: string, name: string, changes: any }
	): Observable<string> // JSON containing: DBLibrary | {error: {message: string}}
	{
		return this.__restApi.patch('update-library', params);
	}


	delete(
		params: { sessionID: string, name: string }
	): Observable<string> // JSON containing: {success: true} | {error: {message: string}}
	{
		return this.__restApi.delete('delete-library', params);
	}


}
