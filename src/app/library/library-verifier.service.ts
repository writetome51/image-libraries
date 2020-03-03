import { CurrentRouteService } from '../services/current-route.service';
import { getByIndex } from '@writetome51/array-get-by-index';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from '../services/paginator/library-paginator.service';
import { LoadedLibraryData as loadedLibrary }
	from '../data/runtime-state-data/static-classes/loaded-library.data';
import { LoadedImagesData as loadedImages }
	from '../data/runtime-state-data/static-classes/loaded-images.data';
import { RedirectToLoggedInHomeService } from '../services/redirect-to-logged-in-home.service';
import { RequestedLibraryData as requestedLibrary }
	from '../data/runtime-state-data/requested-library.data';
import { ImageTotalData as imageTotal }
	from '../data/runtime-state-data/static-classes/image-total.data';


@Injectable({providedIn: 'root'})

export class LibraryVerifierService {

	constructor(
		private __libraryPaginator: LibraryPaginatorService,
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

		if (noValue(loadedLibrary.data) || requestedLibrary.name !== loadedLibrary.name) {
			await this.__libraryPaginator.setInitial_dataTotal();
			console.log('initial dataTotal: ', imageTotal.data);

			await this.__libraryPaginator.set_currentPageNumber(1);

			// for debugging:
			console.log('images:');
			console.log(loadedImages.data);
		}
	}


	private __isLoaded(libraryName): boolean {
		return (hasValue(loadedLibrary.data) && loadedLibrary.name === libraryName);
	}


}
