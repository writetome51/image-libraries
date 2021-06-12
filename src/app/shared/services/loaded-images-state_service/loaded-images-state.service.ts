import { ImageRecord } from '@interfaces/image-record.interface';
import { ImageRecordBatch } from '@interfaces/image-record-batch.interface';
import { Injectable } from '@angular/core';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { LoadedImagesData as loadedImages } from './loaded-images.data';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { Settable } from '@interfaces/settable.interface';
import { ImagesOrigin } from '@app/shared/types/images-origin.type';
import { LoadConfigurationData as loadConfig }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Injectable({providedIn: 'root'})
export class LoadedImagesStateService implements ResettableToDefault, Settable<ImageRecordBatch> {

	private __origin: ImagesOrigin | 'none' = 'none';


	constructor(private __loadedLibrary: LoadedLibraryInBrowserStorageService) {}


	getOrigin(): ImagesOrigin | 'none' {
		return this.__origin;
	}


	getImages(): ImageRecord[] {
		return loadedImages.data;
	}


	set(imageBatch: ImageRecordBatch) {
		loadedImages.data = imageBatch.images;
		this.__origin = imageBatch.from;

		if (this.__origin === 'all') this.__removeLoadedLibraryData();
	}


	setDefault() {
		loadedImages.setDefault();
		loadConfig.number = 1;
		this.__origin = 'none';
		this.__removeLoadedLibraryData();
	}


	private __removeLoadedLibraryData() {
		this.__loadedLibrary.remove();
		requestedLibrary.name = undefined;
	}

}
