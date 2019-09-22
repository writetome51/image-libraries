import { getObjectFromJSON } from 'get-object-from-json';
import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';
import { SuccessOrErrorMessageService }
	from '../../success-or-error-message/success-or-error-message.service';


@Injectable({
	providedIn: 'root'
})
export class UserLibrariesService extends PublicArrayContainer {


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __successOrErrorMessage: SuccessOrErrorMessageService
	) {
		super();

		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();
		if (typeof result === 'string') result = getObjectFromJSON(result);

		if (result.error) this.__successOrErrorMessage.error = result.error.message;

		else this.data = result;
	}


}
