import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActiveUserService } from './active-user.service';
import { LibrariesRestAPIService } from './libraries-rest-api.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService {


	constructor(
		private __librariesRestApi: LibrariesRestAPIService,
		private __activeUser: ActiveUserService
	) {
	}


	getLibrary(): Observable<any> {
		return this.__librariesRestApi.getLibrary({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			libraryName: this.__activeUser.activeLibraryName
		});
	}


	updateLibraries(): Observable<any> {
		return this.__librariesRestApi.update({
			email: this.__activeUser.email,
			password: this.__activeUser.password,
			newValue: this.__activeUser.activeLibrary
		});
	}


}
