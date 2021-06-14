import { AlertsService as alerts } from '@services/alerts.service';
import { ProcessGetLibrariesService }
	from '@process/process-get-libraries_service/process-get-libraries.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { DeleteLibraryButtonServicesModule } from '../../delete-library-button-services.module';


@Injectable({providedIn: DeleteLibraryButtonServicesModule})
export class RunTasksAfterDeletionOfLibraryService implements IDoThis {

	constructor(
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __processGetLibraries: ProcessGetLibrariesService
	) {}


	async go() {
		await this.__updateLoadedLibraries();
		await this.__redirectToLoggedInHome.go();
		alerts.setSuccess('Library deleted');
	}


	private async __updateLoadedLibraries() {
		await this.__processGetLibraries.go();
	}

}
