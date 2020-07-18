import { Injectable } from '@angular/core';
import { AlertData as alert }
	from '../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { RedirectToLoggedInHomeService } from '../../../services/redirect-to-logged-in-home.service';
import { GetLibrariesProcessorService }
	from '../../../services/data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { IDoThis } from '../../../../interfaces/i-do-this';


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
