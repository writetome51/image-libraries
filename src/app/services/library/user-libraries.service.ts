import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';
import { DataRequestResultService } from '../data-request-result.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({
	providedIn: 'root'
})
export class UserLibrariesService extends PublicArrayContainer {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataRequestResult: DataRequestResultService
	) {
		super();

		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();
		result = this.__dataRequestResult.checkForError_returnIfOK(result);
		if (hasValue(result)) {
			this.data = result;
		}
	}


}
