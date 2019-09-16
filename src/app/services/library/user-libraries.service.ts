import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';


@Injectable({
	providedIn: 'root'
})
export class UserLibrariesService extends PublicArrayContainer {


	constructor(private __libraryStorage: LibraryStorageService) {
		super();

		this.__set_data();
	}


	private async __set_data() {
		this.data = await this.__libraryStorage.getLibraries();
	}


}
