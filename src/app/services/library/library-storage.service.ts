import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { SessionIDLocalStorageService } from '../authentication/session-id-local-storage.service';
import { RestAPIRequestResultService } from '../rest-api-request-result.service';


@Injectable({
	providedIn: 'root'
})
export class LibraryStorageService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __sessionIDLocalStorage: SessionIDLocalStorageService,
		private __restApiRequestResult: RestAPIRequestResultService
	) {
	}


	async create(libraryName): Promise<any> {
		return await getSubscriptionData(
			this.__libraryRestApi.create(
				{sessionID: this.__sessionIDLocalStorage.get(), name: libraryName}
			)
		);
	}


	async get(libraryName): Promise<any> {
		return await getSubscriptionData(
			this.__libraryRestApi.get(
				{sessionID: this.__sessionIDLocalStorage.get(), name: libraryName}
			)
		);
	}


	async getLibraries(): Promise<any | void> {
		let result = await getSubscriptionData(
			this.__libraryRestApi.getLibraries({sessionID: this.__sessionIDLocalStorage.get()})
		);
		return this.__restApiRequestResult.checkForError_returnIfOK(result);
	}


	// The properties in 'changes' can contain dot-notation

	async update(libraryName, changes): Promise<any> {
		return await getSubscriptionData(
			this.__libraryRestApi.update({
				sessionID: this.__sessionIDLocalStorage.get(),
				name: libraryName,
				changes
			})
		);
	}


}
