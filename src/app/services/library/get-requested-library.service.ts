import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { IDoThis } from '../../interfaces/i-do-this';
import { LibraryStorageService } from './library-storage.service';
import { DataTransportResultCheckService }   // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { DBLibrary } from '../../interfaces/db-library';


@Injectable({providedIn: 'root'})

export class GetRequestedLibraryService implements IDoThis {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
	}


	async go(): Promise<DBLibrary | void> {
		let result = await this.__libraryStorage.get();
		result = await this.__dataTransportResultCheck.returnIfNoError(result);

		if (hasValue(result)) return result;
	}

}
