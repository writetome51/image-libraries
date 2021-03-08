import { ImagesLoadedFromData as imagesLoadedFrom } from './images-loaded-from.data';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { Injectable } from '@angular/core';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { LoadedImagesData as loadedImages } from './loaded-images.data';
import { DBImage } from '@interfaces/db-image.interface';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { ImageBatch } from '@interfaces/image-batch.interface';


@Injectable({providedIn: 'root'})
export class LoadedImageStateService implements ResettableToDefault {

	constructor(private __loadedLibrary: LoadedLibraryInBrowserStorageService) {}


	getOrigin(): 'all' | 'library' | 'nowhere' {
		return imagesLoadedFrom.status;
	}


	setLoadedImages(imageBatch: ImageBatch) {
		loadedImages.data = imageBatch.images;

		imagesLoadedFrom.status = imageBatch.from;
		if (imageBatch.from === 'all'){
			this.__loadedLibrary.remove();
			requestedLibrary.name = undefined;
		}
	}


	getLoadedImages(): DBImage[] {
		return loadedImages.data;
	}


	setDefault() {
		imagesLoadedFrom.setDefault();
		loadedImages.setDefault();
		this.__loadedLibrary.remove();
		requestedLibrary.name = undefined;
	}

}
