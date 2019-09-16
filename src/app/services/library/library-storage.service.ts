import { CurrentLibraryService } from './current-library.service';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
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


	async create(libraryName): Promise<any> {
		return new Promise((returnData) => {

			let subscription = this.__libraryRestApi.create(
				{sessionID: this.__sessionIDLocalStorage.get(), name: libraryName}
			).subscribe((result) => {

				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	async get(): Promise<any> {
		return new Promise((returnData) => {

			let subscription = this.__libraryRestApi.get(
				{sessionID: this.__sessionIDLocalStorage.get(), name: this.__currentLibrary.name}
			).subscribe((result) => {

				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	async getLibraries(): Promise<any> {
		return new Promise((returnData) => {

			let subscription = this.__libraryRestApi.getLibraries(
				{sessionID: this.__sessionIDLocalStorage.get()}
			).subscribe((result) => {

				returnData(result);
				subscription.unsubscribe();
			});
		});
	}


	// The properties in 'changes' can contain dot-notation

	async update(changes): Promise<any> {
		return new Promise((returnData) => {

			let subscription = this.__libraryRestApi.update({
				sessionID: this.__sessionIDLocalStorage.get(),
				name: this.__currentLibrary.name,
				changes

			}).subscribe((result) => {

				returnData(result);
				subscription.unsubscribe();
			});

		});

	}


}
