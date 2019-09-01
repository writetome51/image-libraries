import { Observable } from 'rxjs';
import { RestAPIService } from './rest-api.service';
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


	getLibrary(): Observable<any> {
		return this.__restApi.getLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName
		});
	}


	getUser(): Observable<any> {
		return this.__restApi.getUser(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


	updateImage(): Observable<any> {
		return this.__restApi.updateImage(
			{
				email: this.__activeUser.email,
				password: this.__activeUser.password,
				libraryName: this.__activeUser.activeLibraryName,
				imageIndex: this.__activeUser.activeImageIndex,
				newValue: this.__activeUser.activeImage
			}
		);
	}


	updateLibrary(): Observable<any> {
		return this.__restApi.updateLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName,
			newValue: this.__activeUser.activeLibrary
		});
	}


	updatePassword(): Observable<any> {
		return this.__restApi.updatePassword(
			{
				email: this.__activeUser.email, password: this.__activeUser.password,
				newPassword: this.__activeUser.newPassword
			}
		);
	}


	updateEmail(): Observable<any> {
		return this.__restApi.updateEmail({
			email: this.__activeUser.email, password: this.__activeUser.password,
			newEmail: this.__activeUser.newEmail
		});
	}


	private __addEmptyUserto__localStore(email) {
		let user = {email: {}};
		this.__localStore.modify(user);
	}


}
