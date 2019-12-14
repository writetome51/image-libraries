import { AppLibrary } from '../../interfaces/app-library';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from './library-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { DataTransportResultCheckService } // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

export class CurrentUserLibrariesService {

	data: AppLibrary[];


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataProcessResultCheck: DataTransportResultCheckService
	) {
		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();
		result = await this.__dataProcessResultCheck.returnIfNoError(result);
		if (hasValue(result)) this.data = result;
	}

}
