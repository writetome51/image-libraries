import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterDeletingImagesService implements IDoThis {

	async go() {
		alert.success = 'Image(s) deleted';
	}

}
