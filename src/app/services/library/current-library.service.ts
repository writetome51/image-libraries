import { Injectable } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { LibraryStorageService } from './library-storage.service';
import { DataOperationResultCheckService }
	from '../data-operation-result-check/data-operation-result-check.service';


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
		private __dataOperationResultCheck: DataOperationResultCheckService
	) {
	}


	async set(libraryName) {
		let result = await this.__libraryStorage.get(libraryName);

		await this.__dataOperationResultCheck.ifSuccessful_processResult(
			result,
			(result) => this.data = result
		);
	}


}
