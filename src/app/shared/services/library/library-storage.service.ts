import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LibraryRestAPIService } from './library-rest-api.service';
import { LocalSessionIDService } from '@local-data/local-session-id.service';
import { GetObjectFromSubscriptionService as getObjectFromSubscription}
	from '../get-object-from-subscription.service';


@Injectable({providedIn: 'root'})

export class LibraryStorageService {


	constructor(
		private __libraryRestApi: LibraryRestAPIService,
		private __localSessionID: LocalSessionIDService
	) {
	}


	async get(libraryName: string): Promise<DBLibrary | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.get(
				{sessionID: this.__localSessionID.get(), name: libraryName}
			)
		);
	}


	async getAll(): Promise<DBLibrary[] | { error: { message: string } }> {
		return await getObjectFromSubscription.go(
			this.__libraryRestApi.getLibraries({sessionID: this.__localSessionID.get()})
		);
	}


	async create(libraryName: string): Promise<DBLibrary | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(this.__libraryRestApi.create({
			sessionID: this.__localSessionID.get(),
			name: libraryName
		}));
	}


	async update(
		libraryName: string,
		changes: object // The properties in 'changes' can contain dot-notation.
	): Promise<DBLibrary | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(this.__libraryRestApi.update({
			sessionID: this.__localSessionID.get(),
			name: libraryName,
			changes
		}));
	}


	async delete(libraryName: string): Promise<{ success: true } | { error: { message: string } }>
	{
		return await getObjectFromSubscription.go(this.__libraryRestApi.delete({
			sessionID: this.__localSessionID.get(),
			name: libraryName
		}));
	}


}
