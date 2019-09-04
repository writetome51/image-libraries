import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CurrentUserService } from './current-user.service';
import { LibrariesRestAPIService } from './libraries-rest-api.service';
import { CurrentLibraryService } from './current-library.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService {


	constructor(
		private __librariesRestApi: LibrariesRestAPIService,
		private __currentUser: CurrentUserService,
		private __currentLibrary: CurrentLibraryService
	) {
	}


	getLibrary(): Observable<any> {
		return this.__librariesRestApi.getLibrary({
			email: this.__currentUser.email,
			password: this.__currentUser.password,
			name: this.__currentLibrary.name
		});
	}


	updateLibraries(): Observable<any> {
		return this.__librariesRestApi.update({
			email: this.__currentUser.email,
			password: this.__currentUser.password,
			newValue: this.__currentUser.activeLibrary
		});
	}


}
