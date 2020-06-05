import { Injectable } from '@angular/core';
import { AlertData as alert } from '../../../../../data-structures/runtime-state-data/static-classes/alert.data';
import { DirectProcessor } from '../../../../../interfaces/direct-processor';
import { RedirectToLoggedInHomeService } from '../../../redirect-to-logged-in-home.service';
import { GetLibraryNamesProcessorService } from '../../get-library-names-processor.service';


@Injectable({providedIn: 'root'})

export class DeleteLibraryResultProcessorService implements DirectProcessor {

	constructor(
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __getLibraryNamesProcessor: GetLibraryNamesProcessorService
	) {
	}


	async process(result) {
		await this.__getLibraryNamesProcessor.process();
		await this.__redirectToLoggedInHome.go();
		alert.success = 'Library deleted';
	}

}
