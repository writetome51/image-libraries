import { CurrentRouteService } from '../services/current-route.service';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from '../services/paginator/library-paginator.service';
import { LoadedLibraryData as loadedLibrary }
	from '../data/runtime-state-data/static-classes/loaded-library.data';
import { RedirectToLoggedInHomeService } from '../services/redirect-to-logged-in-home.service';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { OperationStatusData as operationStatus}
	from '../data/runtime-state-data/operation-status.data';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(
		private __libraryPaginator: LibraryPaginatorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __currentRoute: CurrentRouteService
	) {
	}


	async verify(): Promise<void> {

		requestedLibrary.name = this.__currentRoute.params['libraryName'];

		await this.__loadRequestedLibrary_ifItExists();

		if (this.__isLoaded(requestedLibrary.name)) {
			operationStatus.waiting = false;
			return;
		}
		else await this.__redirectToLoggedInHome.go();
	}


	private async __loadRequestedLibrary_ifItExists(): Promise<void> {

		if (noValue(loadedLibrary.data) || requestedLibrary.name !== loadedLibrary.libName) {
			await this.__libraryPaginator.reset();
		}
	}


	private __isLoaded(libraryName): boolean {
		return (hasValue(loadedLibrary.data) && loadedLibrary.libName === libraryName);
	}


}
