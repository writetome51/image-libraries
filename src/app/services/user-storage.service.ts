import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActiveUserService } from './active-user.service';
import { UserRestAPIService } from './user-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class UserStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __activeUser: ActiveUserService
	) {
	}


	create(): Observable<any> {
		return this.__userRestApi.create(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


	delete(): Observable<any> {
		return this.__userRestApi.delete(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


	get(): Observable<any> {
		return this.__userRestApi.get(
			{email: this.__activeUser.email, password: this.__activeUser.password}
		);
	}


	updatePassword(): Observable<any> {
		return this.__userRestApi.updatePassword(
			{
				email: this.__activeUser.email, password: this.__activeUser.password,
				newPassword: this.__activeUser.newPassword
			}
		);
	}


	updateEmail(): Observable<any> {
		return this.__userRestApi.updateEmail({
			email: this.__activeUser.email, password: this.__activeUser.password,
			newEmail: this.__activeUser.newEmail
		});
	}






	getLibrary(): Observable<any> {
		return this.__userRestApi.getLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName
		});
	}


	updateImage(): Observable<any> {
		return this.__userRestApi.updateImage(
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
		return this.__userRestApi.updateLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName,
			newValue: this.__activeUser.activeLibrary
		});
	}


}
