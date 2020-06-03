import { Injectable } from '@angular/core';
import { LibraryRestApiService } from './library-rest-api.service';
import { LocalSessionIDService } from '../local-data/local-session-id.service';
import { getSubscriptionData } from '@writetome51/get-subscription-data';


@Injectable({providedIn: 'root'})

export class LibraryCreatorService {


	constructor(
		private __libraryRestApi: LibraryRestApiService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async create(libraryName: string): Promise<string>
		// JSON containing: DBLibrary | {error: {message: string}}
	{
		return await getSubscriptionData(
			this.__libraryRestApi.create(
				{
					sessionID: this.__localSessionID.get(),
					name: libraryName
				}
			)
		);
	}


}
