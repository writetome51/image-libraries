import { CurrentLibraryService } from './current-library.service';
import { Injectable } from '@angular/core';
import { LibrariesRestAPIService } from './libraries-rest-api.service';
import { Observable } from 'rxjs';
import { SessionIDLocalStorageService } from './session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService {


	constructor(
		private __librariesRestApi: LibrariesRestAPIService,
		private __currentLibrary: CurrentLibraryService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	getLibrary(): Observable<any> {
		return this.__librariesRestApi.getLibrary({
			sessionID: this.__sessionIDLocalStorage.get(),
			name: this.__currentLibrary.name
		});
	}


	updateLibrary(): Observable<any> {
		return this.__librariesRestApi.updateLibrary({
			sessionID: this.__sessionIDLocalStorage.get(),
			name: this.__currentLibrary.name,
			// The properties in 'changes' can contain dot-notation
			changes: {}
		});
	}


}
