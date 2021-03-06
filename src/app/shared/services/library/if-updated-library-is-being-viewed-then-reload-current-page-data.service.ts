import { Injectable } from '@angular/core';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { noValue } from '@writetome51/has-value-no-value';
import { ReloadCurrentPageDataWithCurrentPaginatorService }
	from '@services/reload-current-page-data-with-current-paginator_service/reload-current-page-data-with-current-paginator.service';


@Injectable({providedIn: 'root'})
export class IfUpdatedLibraryIsBeingViewedThenReloadCurrentPageDataService implements IDoThis {

	constructor(
		private __loadedImagesState: LoadedImagesStateService,
		private __reloadCurrentPageData: ReloadCurrentPageDataWithCurrentPaginatorService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	async go(updatedLibraryName: string) {
		const loadedLib = this.__loadedLibrary.get();
		if (noValue(loadedLib)) return;

		if ((loadedLib.name === updatedLibraryName)
			&& (this.__loadedImagesState.getOrigin() === 'library')) {

			await this.__reloadCurrentPageData.go();
		}
	}

}
