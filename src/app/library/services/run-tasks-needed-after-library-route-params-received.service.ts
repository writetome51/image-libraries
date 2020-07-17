import { ImagesLoadedFromData as imagesLoadedFrom }
	from '../../../data-structures/runtime-state-data/static-classes/images-loaded-from.data';
import { Injectable } from '@angular/core';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { RequestedLibraryData as requestedLibrary }
	from '../../../data-structures/runtime-state-data/requested-library.data';
import { URLParamIDData as paramID } from '../../../data-structures/read-only-data/url-param-id.data';
import { LibraryPaginatorService } from '../../services/app-paginator/library-paginator.service';
import { LibraryVerifierService } from './library-verifier.service';
import { RedirectToLoggedInHomeService } from '../../services/redirect-to-logged-in-home.service';
import { IDoThis } from '../../../interfaces/i-do-this';
import { LoadedLibraryData as loadedLibrary }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-library.data';


@Injectable({providedIn: 'root'})

export class RunTasksNeededAfterLibraryRouteParamsReceivedService implements IDoThis {


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
