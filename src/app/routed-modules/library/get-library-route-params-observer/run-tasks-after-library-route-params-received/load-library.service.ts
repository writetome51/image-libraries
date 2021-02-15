import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from '../../library-paginator/library-paginator.service';
import { LibraryNamesData as libraryNames, LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LoadLibraryService implements IDoThis {

	constructor(
		private __paginator: LibraryPaginatorService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async go(libName, pageNumber): Promise<void> {

		if (this.__libraryNotLoaded(libName)) {

			if (await this.__libraryDoesntExist(libName)) {
				return this.__redirectToLoggedInHome.go();
			}
			else await this.__paginator.resetToFirstPage();
		}
		await this.__setPaginatorToRequestedPage(pageNumber);
	}


	private __libraryNotLoaded(libName): boolean {
		return (noValue(loadedLibrary.data) || libName !== loadedLibrary.libName);
	}


	private async __libraryDoesntExist(libName) {
		return not(libraryNames.data.includes(libName));
	}


	private async __setPaginatorToRequestedPage(num) {
		await this.__paginator.setCurrentPageNumber(num);
	}

}
