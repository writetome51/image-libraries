import { DBImage } from '@interfaces/db-image';
import { IDoThis } from '@interfaces/i-do-this';
import { LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingImagesService implements IDoThis {

	async go(result: { batch: DBImage[] }) {
		loadedImages.data = result.batch;
	}

}
