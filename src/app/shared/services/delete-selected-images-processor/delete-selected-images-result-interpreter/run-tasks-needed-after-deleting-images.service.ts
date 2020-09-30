import { Injectable } from '@angular/core';
import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { IDoThis } from '@interfaces/i-do-this';
import { SelectedImageNamesData as selectedImageNames }
	from '@runtime-state-data/selected-image-names.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterDeletingImagesService implements IDoThis {

	async go() {
		selectedImageNames.data.length = 0;
		alert.success = 'Image(s) deleted';
	}

}
