import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { ReturnObjectFromSubscriptionService } from '../return-object-from-subscription.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService extends ReturnObjectFromSubscriptionService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService
	) {
		super();
	}


	async create(libraryName): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__libraryRestApi.create(
				{sessionID: this.__sessionIDLocalStorage.get(), name: libraryName}
			)
		);
	}


	async get(libraryName): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__libraryRestApi.get(
				{sessionID: this.__sessionIDLocalStorage.get(), name: libraryName}
			)
		);
	}


	async getLibraries(): Promise<any | void> {
		return await this._getObjectFromSubscriptionTo(
			this.__libraryRestApi.getLibraries({sessionID: this.__sessionIDLocalStorage.get()})
		);
	}


	// The properties in 'changes' can contain dot-notation

	async update(libraryName, changes): Promise<any> {
		return await this._getObjectFromSubscriptionTo(
			this.__libraryRestApi.update({
				sessionID: this.__sessionIDLocalStorage.get(),
				name: libraryName,
				changes
			})
		);
	}


}
