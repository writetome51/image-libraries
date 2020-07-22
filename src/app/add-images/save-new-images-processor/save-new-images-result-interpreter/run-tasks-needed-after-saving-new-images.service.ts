import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { NewImagesData as newImages }
	from '../../../../data-structures/runtime-state-data/static-classes/resettable-to-default/new-images.data';
import { IDoThis } from '../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSavingNewImagesService implements IDoThis {

	async go(result) {
		newImages.data = [];
		alert.success = 'New images saved';
	}

}
