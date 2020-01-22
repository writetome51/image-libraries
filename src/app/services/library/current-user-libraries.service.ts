import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from './library-storage.service';
import { SettableDataContainerService } from '../settable-data-container.service';
import { DBLibrary } from '../../interfaces/db-library';


@Injectable({providedIn: 'root'})

export class CurrentUserLibrariesService extends SettableDataContainerService {


	get data(): string[] {
		return this._data;
	}


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
		super();
	}


	async set_data() {
		let result: DBLibrary[] | { error: object } = await this.__libraryStorage.getLibraries();
		result = await this.__dataTransportResultCheck.returnIfNoError(result);

		if (hasValue(result)) {
			// @ts-ignore
			result = result.map((library: DBLibrary) => library.name);
			this._data = result;
		}
	}


}
