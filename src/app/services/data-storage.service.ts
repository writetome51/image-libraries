import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
import { LibraryImage } from '../../types/library-image';
import { Injectable } from '@angular/core';
import { ObjectInLocalStorage } from '@writetome51/object-in-local-storage';
import { ActiveUserService } from './active-user.service';


@Injectable({
	providedIn: 'root'
})
export class DataStorageService {

	private __localStore = new ObjectInLocalStorage('image-lib-users-zhfqaiok', {});


	constructor(
		private __restApi: RestAPIService,
		private __activeUser: ActiveUserService
	) {
	}


	createUser(): Observable<any> {
		return this.__restApi.createUser(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


	deleteUser(): Observable<any> {
		return this.__restApi.deleteUser(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


	getLibrary(
		params: { email: string, password: string, libraryName: string }
	): Observable<any> {
		return this.__restApi.getLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName
		});
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


	updateEmail(
		params: { email: string, password: string, newEmail: string }
	): Observable<any> {
		return this.__restApi.updateEmail(params);
	}


	private __addEmptyUserto__localStore(email) {
		let user = {};
		user[email] = {};
		this.__localStore.modify(user);
	}


}
