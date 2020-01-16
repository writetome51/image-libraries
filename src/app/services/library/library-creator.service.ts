import { GetObjectFromSubscriptionService as getObjectFromSubscription }
	from '../get-object-from-subscription.service';
import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';


@Injectable({providedIn: 'root'})

export class LibraryCreatorService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async create(libraryName: string): Promise<any> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.create(
				{
					sessionID: this.__localSessionID.get(),
					name: libraryName
				}
			)
		);
	}


}
