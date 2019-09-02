import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActiveUserService } from './active-user.service';
import { UserRestAPIService } from './user-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService {


	constructor(
		private __userRestApi: UserRestAPIService,
		private __activeUser: ActiveUserService
	) {
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
