import { Injectable } from '@angular/core';
import { LoadedImagesData as loadedImages, ImagesLoadedFromData as imagesLoadedFrom }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';


@Injectable({providedIn: 'root'})
export class RunTasksAfterModifyingLoadedImagesService implements IDoThis {

	go() {
		this.__emptyImageCacheSoImagesWillBeForcedToRefresh();
	}


	private __emptyImageCacheSoImagesWillBeForcedToRefresh() {
		loadedImages.setDefault();
		imagesLoadedFrom.setDefault();
	}

}
