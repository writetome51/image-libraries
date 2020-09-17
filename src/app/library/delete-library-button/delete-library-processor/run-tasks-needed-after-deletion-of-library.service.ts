import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { GetLibrariesProcessorService }
	from '@services/data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterDeletionOfLibraryService implements IDoThis {

	constructor(
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __getLibrariesProcessor: GetLibrariesProcessorService
	) {
	}


	async go(result) {
		await this.__getLibrariesProcessor.process();
		await this.__redirectToLoggedInHome.go();
		alert.success = 'Library deleted';
	}

}
