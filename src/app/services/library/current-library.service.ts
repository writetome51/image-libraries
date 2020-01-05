import { AppImage } from '../../interfaces/app-image';
import { DBLibrary } from '../../interfaces/db-library';
import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from './library-storage.service';
import { DataTransportResultCheckService }  // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';


@Injectable({providedIn: 'root'})

// Represents library currently being viewed

export class CurrentLibraryService {


	private __data: {

		name: string;
		images: AppImage[],
		currentImage: AppImage; // image currently being viewed
		currentImageIndex: number;
		changes: object; // only use strings as keys so you can use dot-notation.
		dbLibrary: DBLibrary; // library retrieved from storage.

	} = {
		name: '',
		images: [],
		currentImage: undefined, // image currently being viewed
		currentImageIndex: -1,
		changes: {}, // only use strings as keys so you can use dot-notation.
		dbLibrary: undefined // library retrieved from storage.
	};


	get data() {
		return this.__data;
	}


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
	}


	async set_data() {
		let result = await this.__libraryStorage.get(this.data.name);
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) this.__data = result;
	}


	unset_data() {
		this.__data = undefined;
	}


}
