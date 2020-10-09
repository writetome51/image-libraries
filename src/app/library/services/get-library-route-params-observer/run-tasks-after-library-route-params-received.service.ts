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

		if (noValue(loadedLibrary.data) || requestedLibrary.name !== loadedLibrary.libName) {
			await this.__ifLibraryDoesntExist_redirectToLoggedInHome_else_resetToFirstPage();
		}
		await this.__ifNotFirstPage_setCurrentPageNumber(params[paramID.pageNumber]);
	}


	private async __ifLibraryDoesntExist_redirectToLoggedInHome_else_resetToFirstPage() {
		let verified = await this.__libraryVerifier.verify(requestedLibrary.name);
		if (not(verified)) return this.__redirectToLoggedInHome.go();

		await this.__paginator.resetToFirstPage();
	}


	private async __ifNotFirstPage_setCurrentPageNumber(num) {
		let page = Number(num);
		if (page > 1) await this.__paginator.setCurrentPageNumber(page);
	}


}
