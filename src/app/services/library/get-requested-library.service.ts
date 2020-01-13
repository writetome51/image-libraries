import { Injectable } from '@angular/core';
import { IDoThis } from '../../interfaces/i-do-this';
import { LibraryStorageService } from './library-storage.service';
import { DBLibrary } from '../../interfaces/db-library';
import { not } from '@writetome51/not';
import { DataTransportResultCheckService }  // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { LibraryNameService } from './library-name.service';


@Injectable({providedIn: 'root'})

export class GetRequestedLibraryService implements IDoThis {

	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
	}


	async go(libraryName): Promise<DBLibrary | void> {
		LibraryNameService.data = libraryName;

		let result: any = await this.__libraryStorage.get();
		if (not(result.error)) return result;
	}

}
