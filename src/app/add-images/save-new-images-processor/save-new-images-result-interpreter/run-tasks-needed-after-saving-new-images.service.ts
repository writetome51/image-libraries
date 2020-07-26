import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../shared/data/runtime-state/static-classes/alert.data';
import { NewImagesData as newImages }
	from '../../../shared/data/runtime-state/static-classes/resettable-to-default/new-images.data';
import { IDoThis } from '../../../shared/interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSavingNewImagesService implements IDoThis {

	async go(result) {
		newImages.data = [];
		alert.success = 'New images saved';
	}

}
