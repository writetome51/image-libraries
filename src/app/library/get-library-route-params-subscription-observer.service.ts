import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { RequestedLibraryData as requestedLibrary }
	from '../../data-structures/runtime-state-data/requested-library.data';
import { URLParamIDData as paramID } from '../../data-structures/read-only-data/url-param-id.data';
import { LibraryPaginatorService } from '../services/paginator/library-paginator.service';
import { LibraryVerifierService } from './library-verifier.service';
import { RedirectToLoggedInHomeService } from '../services/redirect-to-logged-in-home.service';
import { IDoThis } from '../../interfaces/i-do-this';
import { LoadedLibraryData as loadedLibrary }
	from '../../data-structures/runtime-state-data/static-classes/loaded-library.data';


@Injectable({providedIn: 'root'})

export class GetLibraryRouteParamsSubscriptionObserverService implements IDoThis {


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryVerifier: LibraryVerifierService,
		private __redirectToLoggedInHome: RedirectToLoggedInHomeService
	) {
	}


	go(): (params) => Promise<void> {

		return async (params) => {
			requestedLibrary.name = params[paramID.libName];

			if (noValue(loadedLibrary.data) || requestedLibrary.name !== loadedLibrary.libName) {
				this.if_LibraryDoesntExist_redirectToLoggedInHome_else_showFirstPage();
			}

			let page = Number(params[paramID.pageNumber]);
			if (page > 1) await this.__paginator.set_currentPageNumber(page);
		};

	}


	async if_LibraryDoesntExist_redirectToLoggedInHome_else_showFirstPage() {
		let verified = await this.__libraryVerifier.verify(requestedLibrary.name);
		if (not(verified)) return this.__redirectToLoggedInHome.go();

		await this.__paginator.resetToFirstPage();
	}


}
