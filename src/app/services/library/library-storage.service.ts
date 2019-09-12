import { CurrentLibraryService } from './current-library.service';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { Observable } from 'rxjs';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __currentLibrary: CurrentLibraryService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
	}


	create(libraryName): Observable<any> {
		return this.__libraryRestApi.create({
			sessionID: this.__sessionIDLocalStorage.get(),
			name: libraryName
		});
	}


	get(): Observable<any> {
		return this.__libraryRestApi.get({
			sessionID: this.__sessionIDLocalStorage.get(),
			name: this.__currentLibrary.name
		});
	}


	getLibraries(): Observable<any> {
		return this.__libraryRestApi.getLibraries({
			sessionID: this.__sessionIDLocalStorage.get()
		});
	}


	// The properties in 'changes' can contain dot-notation

	update(changes): Observable<any> {
		return this.__libraryRestApi.update({
			sessionID: this.__sessionIDLocalStorage.get(),
			name: this.__currentLibrary.name,
			changes
		});
	}


}
