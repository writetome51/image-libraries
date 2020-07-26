import { DBImage } from '@interfaces/db-image';
import { IDoThis } from '@interfaces/i-do-this';
import { ImageTotalData as imageTotal }
	from '@runtime-state-data/static-classes/resettable-to-default/image-total.data';
import { Injectable } from '@angular/core';
import { LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/resettable-to-default/loaded-images.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterGettingImagesService implements IDoThis {

	async go(result: { dataTotal: number, batch: DBImage[] }) {

		loadedImages.data = result.batch;
		imageTotal.data = result.dataTotal;
	}

}
