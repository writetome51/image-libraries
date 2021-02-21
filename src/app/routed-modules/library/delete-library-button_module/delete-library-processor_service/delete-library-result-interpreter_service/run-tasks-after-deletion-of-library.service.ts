import { AlertData as alert } from '@runtime-state-data/static-classes/alert.data';
import { GetLibrariesProcessorService }
	from '@data-transport-processor/get-libraries-processor/get-libraries-processor.service';
import { IDoThis } from '@interfaces/i-do-this/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { DeleteLibraryButtonServicesModule } from '../../delete-library-button-services.module';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class RunTasksAfterDeletionOfLibraryService implements IDoThis {

	constructor(
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __getLibrariesProcessor: GetLibrariesProcessorService
	) {
	}


	async go() {
		await this.__updateLoadedLibraries();
		await this.__redirectToLoggedInHome.go();
		alert.success = 'Library deleted';
	}


	private async __updateLoadedLibraries() {
		await this.__getLibrariesProcessor.process();
	}

}
