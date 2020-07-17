import { Injectable } from '@angular/core';
import { DBImage } from '../../../../interfaces/db-image';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { ImageTotalData as imageTotal }
	from '../../../../data-structures/runtime-state-data/static-classes/image-total.data';
import { IDoThis } from '../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulGettingImagesService implements IDoThis {

	async go(result: { dataTotal: number, batch: DBImage[] }) {

		loadedImages.data = result.batch;
		imageTotal.data = result.dataTotal;
	}

}
