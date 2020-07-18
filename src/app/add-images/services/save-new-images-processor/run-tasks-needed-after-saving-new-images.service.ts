import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { GetAllImagesProcessorService }
	from '../../../services/data-transport-processor/get-images/get-all-images-processor.service';
import { NewImagesData as newImages }
	from '../../../../data-structures/runtime-state-data/static-classes/new-images.data';
import { Router } from '@angular/router';
import { IDoThis } from '../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSavingNewImagesService implements IDoThis {

	constructor(
		private __getAllImagesProcessor: GetAllImagesProcessorService,
		private __router: Router
	) {
	}


	async go(result) {
		newImages.data = [];
		alert.success = 'New images saved';
	}

}
