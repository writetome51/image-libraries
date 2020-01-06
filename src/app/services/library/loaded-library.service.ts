import { hasValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryStorageService } from './library-storage.service';
import { LoadedLibrary } from '../../interfaces/loaded-library';
import { DataTransportResultCheckService }  // tslint:disable-next-line:max-line-length
	from '../data-transport-processor/data-transport-result-interpreter/data-transport-result-check/data-transport-result-check.service';
import { modifyObject } from '@writetome51/modify-object';


@Injectable({providedIn: 'root'})

export class LoadedLibraryService {


	private __data: LoadedLibrary;


	get data() {
		return this.__data;
	}


	constructor(
		private __libraryStorage: LibraryStorageService,
		private __dataTransportResultCheck: DataTransportResultCheckService
	) {
	}


	async set_data() {
		let result = await this.__libraryStorage.get();
		result = await this.__dataTransportResultCheck.returnIfNoError(result);
		if (hasValue(result)) this.__data = result;

		modifyObject(
			this.__data,
			{
				currentImage: undefined, // image currently being viewed
				currentImageIndex: -1,
				changes: {}
			}
		);
	}


	unset_data() {
		this.__data = undefined;
	}


}
