import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { ImagesLoadedFromData as imagesLoadedFrom, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageBatch } from '@interfaces/image-batch.interface';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingImagesService implements IDoThis {

	async go(result: ImageBatch) {
		loadedImages.data = result.batch;
		imagesLoadedFrom.data = result.from;
	}

}
