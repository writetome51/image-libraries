import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { Injectable } from '@angular/core';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { LoadedImagesData as loadedImages } from './loaded-images.data';
import { DBImage } from '@interfaces/db-image.interface';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { ImageBatch } from '@interfaces/image-batch.interface';
import { Settable } from '@interfaces/settable.interface';


@Injectable({providedIn: 'root'})
export class LoadedImageStateService implements ResettableToDefault, Settable {

	private __origin: 'all' | 'library' | 'none' = 'none';


	constructor(private __loadedLibrary: LoadedLibraryInBrowserStorageService) {}


	getOrigin(): 'all' | 'library' | 'none' {
		return this.__origin;
	}


	set(imageBatch: ImageBatch) {
		loadedImages.data = imageBatch.images;
		this.__origin = imageBatch.from;

		if (this.__origin === 'all') this.__removeLoadedLibraryData();
	}


	getLoadedImages(): DBImage[] {
		return loadedImages.data;
	}


	setDefault() {
		this.__origin = 'none';
		loadedImages.setDefault();
		this.__removeLoadedLibraryData();
	}


	private __removeLoadedLibraryData() {
		this.__loadedLibrary.remove();
		requestedLibrary.name = undefined;
	}

}
