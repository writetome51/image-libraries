import { DBLibrary } from '@interfaces/db-library';
import { Injectable } from '@angular/core';
import { LocalSessionIDService }
	from '@services/item-in-browser-storage/item-in-local-storage/local-session-id.service';
import { MongoDBRealmService } from '@services/mongo-db-realm.service';


@Injectable({providedIn: 'root'})
export class LibraryStorageService {

	constructor(
		private __localSessionID: LocalSessionIDService,
		private __realm: MongoDBRealmService
	) {
	}


	async get(libraryName: string): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('getLibrary', {
			name: libraryName,
			sessionID: this.__localSessionID.get()
		});
	}


	async getAll(): Promise<DBLibrary[] | { error: { message: string } }> {
		return await this.__realm.callFn('getLibraries', {sessionID: this.__localSessionID.get()});
	}


	async create(libraryName: string): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('createAndReturnLibrary', {
			name: libraryName,
			sessionID: this.__localSessionID.get()
		});
	}


	async update(
		libraryName: string,
		changes: object // The properties in 'changes' can contain dot-notation.
	): Promise<DBLibrary | { error: { message: string } }> {
		return await this.__realm.callFn('updateAndReturnLibrary', {
			name: libraryName,
			changes,
			sessionID: this.__localSessionID.get()
		});
	}


	async delete(libraryName: string): Promise<{ success: true } | { error: { message: string } }> {
		return await this.__realm.callFn('deleteLibrary', {
			name: libraryName,
			sessionID: this.__localSessionID.get()
		});
	}

}
