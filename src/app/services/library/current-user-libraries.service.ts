import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { DataOperationResultCheckService }
	from '../data-operation-result-check/data-operation-result-check.service';


@Injectable({
	providedIn: 'root'
})
export class CurrentUserLibrariesService extends PublicArrayContainer {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataOperationResultCheck: DataOperationResultCheckService
	) {
		super();
		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();
		result = await this.__dataOperationResultCheck.checkForError_returnIfOK(result);
		if (hasValue(result)) this.data = result;
	}


}
