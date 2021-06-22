import { AlertsService as alerts } from '@services/alerts.service';
import { Injectable } from '@angular/core';
import { IfUpdatedLibraryIsBeingViewedThenReloadCurrentPageDataService }
	from '@library/if-updated-library-is-being-viewed-then-reload-current-page-data.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LibraryRecord } from '@interfaces/library-record.interface';
import { UpdateLibrariesInBrowserStorageService } from '@library/update-libraries-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterUpdatingLibraryService implements IDoThis {

	constructor(
		private __updateLibrariesInBrowser: UpdateLibrariesInBrowserStorageService,
		private __ifUpdatedLibraryIsBeingViewedThenReloadCurrentPageData:
			IfUpdatedLibraryIsBeingViewedThenReloadCurrentPageDataService
	) {}


	async go(updatedLibrary: LibraryRecord) {
		// for security:
		delete updatedLibrary._id;
		delete updatedLibrary._user_id;

		this.__updateLibrariesInBrowser.go(updatedLibrary);

		alerts.setSuccess('Library updated');

		await this.__ifUpdatedLibraryIsBeingViewedThenReloadCurrentPageData.go(updatedLibrary.name);
	}

}
