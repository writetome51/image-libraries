import { ImagesLoadedFromData as imagesLoadedFrom } from './images-loaded-from.data';
import { ResettableToDefault } from '@interfaces/resettable-to-default.interface';
import { Injectable } from '@angular/core';
import { LoadedLibraryInBrowserStorageService } from '@browser-storage/loaded-library-in-browser-storage.service';
import { PageImagesData as pageImages } from './page-images.data';
import { LoadedImagesData as loadedImages } from './loaded-images.data';
import { DBImage } from '@interfaces/db-image.interface';


// Created to solve problem of having so many different data structures keeping track of
// app's current state of loaded images (i.e., are they from a library or are they all the
// user's images, if they're from a library what library are they from, storing the currently
// loaded images, etc.

@Injectable({providedIn: 'root'})
export class LoadedImageStateService implements ResettableToDefault {

	constructor(
		private __libraryInBrowser: LoadedLibraryInBrowserStorageService
	) {}


	setOrigin(value: 'all' | 'library' | 'nowhere') {
		imagesLoadedFrom.status = value;
		if (value === 'all') this.__libraryInBrowser.remove();
	}


	getOrigin(): 'all' | 'library' | 'nowhere' {
		return imagesLoadedFrom.status;
	}


	setLoad(value: DBImage[]) {
		loadedImages.data = value;
	}


	getLoad(): DBImage[] {
		return loadedImages.data;
	}


	setDefault() {
		imagesLoadedFrom.setDefault();
		loadedImages.setDefault();
		pageImages.setDefault();
		this.__libraryInBrowser.remove();
	}

}
