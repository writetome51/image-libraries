import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from '../../library-paginator/library-paginator.service';
import { LibraryVerifierService } from './library-verifier.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


@Injectable({providedIn: 'root'})
export class RunTasksAfterLibraryRouteParamsReceivedService implements IDoThis {


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryVerifier: LibraryVerifierService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	async go(params): Promise<void> {
		requestedLibrary.name = params[paramID.libName];

		if (this.__libraryNotLoaded(requestedLibrary.name)) {

			if (await this.__libraryDoesntExist(requestedLibrary.name)) {
				return this.__redirectToLoggedInHome.go();
			}
			else await this.__paginator.resetToFirstPage();
		}
		await this.__setPaginatorToRequestedPage(params[paramID.pageNumber]);
	}


	private __libraryNotLoaded(libName): boolean {
		return (noValue(loadedLibrary.data) || libName !== loadedLibrary.libName);
	}


	private async __libraryDoesntExist(libName) {
		let verified = await this.__libraryVerifier.verify(libName);
		return not(verified);
	}


	private async __setPaginatorToRequestedPage(num) {
		let page = Number(num);
		await this.__paginator.setCurrentPageNumber(page);
	}

}
