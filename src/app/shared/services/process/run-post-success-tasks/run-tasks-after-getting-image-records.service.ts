import { IDoThis } from '@interfaces/i-do-this.interface';
import { ImageRecordBatch } from '@interfaces/image-record-batch.interface';
import { Injectable } from '@angular/core';
import { LoadedImagesStateService }
	from '@services/loaded-image-state_service/loaded-images-state.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingImageRecordsService implements IDoThis {

	constructor(private __loadedImagesState: LoadedImagesStateService) {}


	async go(result: ImageRecordBatch) {
		this.__loadedImagesState.set(result);
	}

}
