import { DBLibrary } from '../../../interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';
import { RequestedLibraryData as requestedLibrary}
	from '../../../data-structures/runtime-state-data/requested-library.data';


@Injectable({providedIn: 'root'})

export class LibraryStorageService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async get(): Promise<DBLibrary | { error: object }> {
		return await getSubscriptionData(
			this.__libraryRestApi.get(
				{sessionID: this.__localSessionID.get(), name: requestedLibrary.name}
			)
		);
	}


	async getLibraries(): Promise<DBLibrary[] | { error: object }> {
		return await getSubscriptionData(
			this.__libraryRestApi.getLibraries({sessionID: this.__localSessionID.get()})
		);
	}


	async update(
		libraryName: string,

		// The properties in 'changes' can contain dot-notation
		changes: object
	): Promise<DBLibrary | { error: object }> {

		return await getSubscriptionData(
			this.__libraryRestApi.update({
				sessionID: this.__localSessionID.get(),
				name: libraryName,
				changes
			})
		);
	}


}
