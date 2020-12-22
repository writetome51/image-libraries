import { DBImage } from '@interfaces/db-image';
import { IDoThis } from '@interfaces/i-do-this';
import { ImageTotalData as imageTotal, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class RunTasksAfterGettingImagesService implements IDoThis {

	async go(result: { dataTotal: number, batch: DBImage[] }) {

		loadedImages.data = result.batch;
		imageTotal.data = result.dataTotal;
	}

}
