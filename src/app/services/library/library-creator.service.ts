import { Injectable } from '@angular/core';
import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { LibraryRestApiService } from './library-rest-api.service';
import { LocalSessionIDService } from '../authentication/local-session-id.service';
import { CurrentLibraryService } from './current-library.service';


@Injectable({providedIn: 'root'})

export class LibraryCreatorService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __localSessionID: LocalSessionIDService,
		private __currentLibrary: CurrentLibraryService
	) {
	}


	async create(): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.create(
				{
					sessionID: this.__localSessionID.get(),
					name: this.__currentLibrary.libName
				}
			)
		);
	}


}
