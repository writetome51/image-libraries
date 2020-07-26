import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../shared/data/runtime-state/static-classes/alert.data';
import { IDoThis } from '../../../../shared/interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterDeletingImagesService implements IDoThis {

	async go() {
		alert.success = 'Image(s) deleted';
	}

}
