import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { LibraryImage } from '../../types/library-image';
import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class DataStorageService {


	constructor(private __restApi: RestAPIService) {
	}


	createUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.createUser(params);
	}


	deleteUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.deleteUser(params);
	}


	getLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {
		return this.__restApi.getLibrary(params);
	}


	getUser(params: { email: string, password: string }): Observable<any> {
		return this.__restApi.getUser(params);
	}


	updateImage(
		params: {
			email: string, password: string,
			libraryName: string, imageIndex: number, image: LibraryImage
		}
	): Observable<any> {
		return this.__restApi.updateImage(params);
	}


	updateLibrary(
		params: { email: string, password: string, libraryName: string, library: any[] }
	): Observable<any> {
		return this.__restApi.updateLibrary(params);
	}


	updatePassword(
		params: { email: string, password: string, newPassword: string }
	): Observable<any> {
		return this.__restApi.updatePassword(params);
	}


	updateUser(
		params: { email: string, password: string, propToUpdate: string, newValue: any }
	): Observable<any> {
		return this.__restApi.updateUser(params);
	}


}
