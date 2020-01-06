import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { LibraryNameService as libraryName } from './library-name.service';


@Injectable({providedIn: 'root'})

export class LibraryStorageService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async get(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.get(
				{sessionID: this.__localSessionID.get(), name: libraryName.data}
			)
		);
	}


	async getLibraries(): Promise<any | void> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.getLibraries({sessionID: this.__localSessionID.get()})
		);
	}


	// The properties in 'changes' can contain dot-notation

	async update(changes): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.update({
				sessionID: this.__localSessionID.get(),
				name: libraryName.data,
				changes
			})
		);
	}


}
