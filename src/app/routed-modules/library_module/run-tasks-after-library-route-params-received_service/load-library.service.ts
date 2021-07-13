import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LibraryNamesData as libraryNames }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryServicesModule } from '../library-services.module';
import { LoadedLibraryInBrowserStorageService }
	from '@browser-storage/loaded-library-in-browser-storage.service';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { SetCurrentPageImagesService } from '@services/set-current-page-images.service';


@Injectable({providedIn: LibraryServicesModule})
export class LoadLibraryService implements IDoThis {

	constructor(
		private __setCurrentPageImages: SetCurrentPageImagesService,
		private __paginator: LibraryPaginatorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService,
		private __loadedLibrary: LoadedLibraryInBrowserStorageService
	) {}


	async go(libName, pageNumber): Promise<void> {

		if (this.__libraryNotLoaded(libName)) {

			if (this.__libraryDoesntExist(libName)) return this.__redirectToLoggedInHome.go();

			else await this.__setCurrentPageImages.go(pageNumber, this.__paginator, {reload: true});
		}
		else await this.__setCurrentPageImages.go(pageNumber, this.__paginator);
	}


	private __libraryNotLoaded(libName): boolean {
		return (noValue(this.__loadedLibrary.get()) || libName !== this.__loadedLibrary.get().name);
	}


	private __libraryDoesntExist(libName) {
		return not(libraryNames.data.includes(libName));
	}

}
