import { Injectable } from '@angular/core';
import { LibraryStorageService } from './library-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { DBLibrary } from '../../interfaces/db-library';
import { SettableDataContainer } from '../../interfaces/settable-data-container';


@Injectable({providedIn: 'root'})

export class CurrentUserLibrariesService implements SettableDataContainer {


	private __data: DBLibrary[];


	get data() {
		return this.__data;
	}


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
	}


	async set_data() {
		let result = await this.__libraryStorage.getLibraries();
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) this.__data = result;
	}


	unset_data() {
		this.__data = undefined;
	}


}
