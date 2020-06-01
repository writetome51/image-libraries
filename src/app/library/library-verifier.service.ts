import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from '../services/paginator/library-paginator.service';
import { LoadedLibraryData as loadedLibrary }
	from '../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { RedirectToLoggedInHomeService } from '../services/redirect-to-logged-in-home.service';
import { RequestedLibraryData as requestedLibrary }
	from '../../data-structures/runtime-state-data/requested-library.data';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { LoadedImagesStatusData as loadedImagesStatus }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images-status.data';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(
		private __libraryPaginator: LibraryPaginatorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async verify(libName): Promise<void> {
		operationStatus.waiting = true;
		await this.__loadRequestedLibrary_ifItExists(libName);

		if (this.__isLoaded(libName)) {
			loadedImagesStatus.data = 'library';
			operationStatus.waiting = false;
			return;
		}
		else await this.__redirectToLoggedInHome.go();
	}


	private async __loadRequestedLibrary_ifItExists(libName): Promise<void> {
		requestedLibrary.name = libName;

		if (noValue(loadedLibrary.data) || requestedLibrary.name !== loadedLibrary.libName) {
			await this.__libraryPaginator.reset();
		}
	}


	private __isLoaded(libraryName): boolean {
		return (hasValue(loadedLibrary.data) && loadedLibrary.libName === libraryName);
	}


}
