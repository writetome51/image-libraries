import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';
import { SuccessOrErrorMessageService }
	from '../../success-or-error-message/success-or-error-message.service';
import { FetchedDataResultService } from '../fetched-data-result.service';


@Injectable({
	providedIn: 'root'
})
export class UserLibrariesService extends PublicArrayContainer {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __successOrErrorMessage: SuccessOrErrorMessageService,
		private __fetchedDataResult: FetchedDataResultService
	) {
		super();

		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();

		this.data = this.__fetchedDataResult.checkForError_returnIfOK(result);
	}


}
