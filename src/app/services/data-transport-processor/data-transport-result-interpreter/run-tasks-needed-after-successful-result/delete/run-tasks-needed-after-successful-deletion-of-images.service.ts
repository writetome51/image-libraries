import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { RedirectToLoggedInHomeService } from '../../../../redirect-to-logged-in-home.service';
import { IDoThis } from '../../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulDeletionOfImagesService implements IDoThis {

	constructor(private __redirectToLoggedInHome: RedirectToLoggedInHomeService) {
	}


	async go(result) {
		alert.success = 'Image(s) deleted';
	}

}
