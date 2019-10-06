import { Injectable } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { LibraryStorageService } from './library-storage.service';
import { DataRequestResultService } from '../data-request-result.service';
import { hasValue } from '@writetome51/has-value-no-value';


@Injectable({
	providedIn: 'root'
})
// Represents library currently being viewed
export class CurrentLibraryService {


	isNew: boolean; // true if library's never been saved.
	name = '';
	images: AppImage[] = [];
	currentImage: AppImage; // image currently being viewed
	currentImageIndex: number;
	changes = {}; // only use strings as keys so you can use dot-notation.
	data; // library retrieved from storage.


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataRequestResult: DataRequestResultService
	) {
	}


	async set(libraryName) {
		let result = await this.__libraryStorage.get(libraryName);
		result = this.__dataRequestResult.checkForError_returnIfOK(result);
		if (hasValue(result)) this.data = result;
	}


}
