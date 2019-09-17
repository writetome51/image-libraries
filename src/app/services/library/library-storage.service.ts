import { CurrentLibraryService } from './current-library.service';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { SubscriptionDataGetterService } from '../subscription-data-getter.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService extends SubscriptionDataGetterService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __currentLibrary: CurrentLibraryService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
		super();
	}


	async create(libraryName): Promise<any> {
		return await this._getSubscriptionData(
			this.__libraryRestApi.create(
				{sessionID: this.__sessionIDLocalStorage.get(), name: libraryName}
			)
		);
	}


	async get(): Promise<any> {
		return await this._getSubscriptionData(
			this.__libraryRestApi.get(
				{sessionID: this.__sessionIDLocalStorage.get(), name: this.__currentLibrary.name}
			)
		);
	}


	async getLibraries(): Promise<any> {
		return await this._getSubscriptionData(
			this.__libraryRestApi.getLibraries({sessionID: this.__sessionIDLocalStorage.get()})
		);
	}


	// The properties in 'changes' can contain dot-notation

	async update(changes): Promise<any> {
		return await this._getSubscriptionData(
			this.__libraryRestApi.update({
				sessionID: this.__sessionIDLocalStorage.get(),
				name: this.__currentLibrary.name,
				changes
			})
		);
	}


}
