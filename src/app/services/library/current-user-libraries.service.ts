import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { DataOperationResultService } from '../data-operation-result.service';


@Injectable({
	providedIn: 'root'
})
export class CurrentUserLibrariesService extends PublicArrayContainer {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataOperationResult: DataOperationResultService
	) {
		super();
		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();
		result = await this.__dataOperationResult.checkForError_returnIfOK(result);
		if (hasValue(result)) this.data = result;
	}


}
