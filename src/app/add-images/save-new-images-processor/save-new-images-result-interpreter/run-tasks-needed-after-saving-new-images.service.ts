import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { NewImagesData as newImages } from '@runtime-state-data/static-classes/auto-resettable.data';
import { IDoThis } from '@interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSavingNewImagesService implements IDoThis {

	async go(result) {
		newImages.data = [];
		alert.success = 'New images saved';
	}

}
