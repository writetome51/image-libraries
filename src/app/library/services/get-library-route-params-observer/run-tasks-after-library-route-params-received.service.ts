import { IDoThis } from '@interfaces/i-do-this';
import { Injectable } from '@angular/core';
import { LibraryPaginatorService } from '../library-paginator/library-paginator.service';
import { LibraryVerifierService } from './library-verifier.service';
import { LoadedLibraryData as loadedLibrary }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { RedirectToLoggedInHomeService } from '@services/redirect-to-logged-in-home.service';
import { RequestedLibraryData as requestedLibrary } from '@runtime-state-data/requested-library.data';
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
			await this.__ifLibraryDoesntExist_redirectToLoggedInHome_else_setPaginatorToFirstPage(
				requestedLibrary.name
			);
		}
		await this.__setPaginatorToRequestedPage(params[paramID.pageNumber]);
	}


	private __libraryNotLoaded(libName): boolean {
		return (noValue(loadedLibrary.data) || libName !== loadedLibrary.libName);
	}


	private async __ifLibraryDoesntExist_redirectToLoggedInHome_else_setPaginatorToFirstPage(libName) {
		let verified = await this.__libraryVerifier.verify(libName);
		if (not(verified)) return this.__redirectToLoggedInHome.go();

		await this.__paginator.resetToFirstPage();
	}


	private async __setPaginatorToRequestedPage(num) {
		let page = Number(num);
		await this.__paginator.setCurrentPageNumber(page);
	}


}
