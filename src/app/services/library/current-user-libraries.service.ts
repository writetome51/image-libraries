import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { DBLibrary } from '../../interfaces/db-library';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from './library-storage.service';
import { SettableDataContainerService } from '../settable-data-container.service';


@Injectable({providedIn: 'root'})

export class CurrentUserLibrariesService extends SettableDataContainerService {


	get data(): DBLibrary[] {
		return this._data;
	}


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
		super();
	}


	async set_data() {
		let result = await this.__libraryStorage.getLibraries();
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) this._data = result;
	}


}
