import { Injectable } from '@angular/core';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { LibraryStorageService } from './library-storage.service';


@Injectable({
	providedIn: 'root'
})
export class UserLibrariesService extends PublicArrayContainer {

	constructor(private __libraryStorage: LibraryStorageService) {
		super();

		let subscription = this.__libraryStorage.getLibraries().subscribe(
			(result) => {
				this.data = result;
				subscription.unsubscribe();
			}
		);
	}


}
