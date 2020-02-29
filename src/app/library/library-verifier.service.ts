import { GetLibraryProcessorService }
	from '../services/data-transport-processor/get-library-processor.service';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LoadedLibraryData as loadedLibrary } from '../data/runtime-state-data/loaded-library.data';
import { LoadedImagesData } from '../data/runtime-state-data/loaded-images.data';
import { OperationStatusData as verificationStatus }
	from '../data/runtime-state-data/operation-status.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../services/perform-data-process-requiring-waiting.service';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { CurrentRouteService } from '../services/current-route.service';
import { getByIndex } from '@writetome51/array-get-by-index';
import { RedirectToLoggedInHomeService } from '../services/redirect-to-logged-in-home.service';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(
		private __getLibraryProcessor: GetLibraryProcessorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __currentRoute: CurrentRouteService
	) {
	}


	async verify(): Promise<void> {

		requestedLibrary.name = getByIndex(-1, this.__currentRoute.data.split('/'));

		await this.__loadRequestedLibrary_ifItExists();

		if (this.__isLoaded(requestedLibrary.name)) return;
		else await this.__redirectToLoggedInHome.go();
	}


	private async __loadRequestedLibrary_ifItExists(): Promise<void> {

		if (noValue(loadedLibrary.data) || requestedLibrary.name !== loadedLibrary.data.name) {
			await performDataProcessRequiringWaiting.go(
				this.__getLibraryProcessor, verificationStatus
			);

			//temp:
			console.log('images: ' + LoadedImagesData.data);
		}
	}


	private __isLoaded(libraryName): boolean {
		return (hasValue(loadedLibrary.data) && loadedLibrary.data.name === libraryName);
	}


}
