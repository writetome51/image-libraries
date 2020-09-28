import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import {
	LoadedImagesData as loadedImages, ImagesLoadedFromData as imagesLoadedFrom,
	NewImagesData as newImages
} from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksAfterSavingNewImagesService implements IDoThis {

	async go() {
		alert.success = 'New images saved';
		this.__emptyImageCacheSoImagesWillBeForcedToRefresh();
	}


	private __emptyImageCacheSoImagesWillBeForcedToRefresh() {
		newImages.data = [];
		loadedImages.setDefault();
		imagesLoadedFrom.setDefault();
	}

}
