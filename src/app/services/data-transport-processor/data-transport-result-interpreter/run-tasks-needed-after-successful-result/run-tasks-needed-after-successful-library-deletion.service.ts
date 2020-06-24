import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { RedirectToLoggedInHomeService } from '../../../redirect-to-logged-in-home.service';
import { GetLibraryNamesProcessorService } from '../../get-library-names-processor.service';
import { IDoThis } from '../../../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterSuccessfulLibraryDeletionService implements IDoThis {

	constructor(
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __getLibraryNamesProcessor: GetLibraryNamesProcessorService
	) {
	}


	async go(result) {
		await this.__getLibraryNamesProcessor.process();
		await this.__redirectToLoggedInHome.go();
		alert.success = 'Library deleted';
	}

}
