import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({
	providedIn: 'root'
})
export class CurrentUserLibrariesService extends PublicArrayContainer {


	constructor(
		private __libraryStorage: LibraryStorageService
	) {
		super();
		this.__set_data();
	}


	private async __set_data() {
		let result = await this.__libraryStorage.getLibraries();

		if (hasValue(result)) this.data = result;
	}


}
