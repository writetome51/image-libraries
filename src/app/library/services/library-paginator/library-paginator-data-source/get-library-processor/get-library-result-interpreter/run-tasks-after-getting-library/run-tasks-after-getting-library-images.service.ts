import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import {
	LoadedLibraryData as loadedLibrary, ImageTotalData as imageTotal,
	ImagesLoadedFromData as imagesLoadedFrom
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageBatch } from '@interfaces/image-batch';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { LibrariesInBrowserStorageService }
	from '@item-in-browser-storage/libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingLibraryImagesService implements IDoThis {

	constructor(private __librariesInBrowser: LibrariesInBrowserStorageService) {
	}


	async go(result: ImageBatch) {
		loadedLibrary.data = this.__librariesInBrowser.get()[requestedLibrary.name];

		imageTotal.data = loadedLibrary._image_ids.length;

		imagesLoadedFrom.data = result.from;
	}

}
