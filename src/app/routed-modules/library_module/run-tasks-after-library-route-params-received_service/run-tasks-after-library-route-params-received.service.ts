import { GetPageTitleService as getPageTitle }
	from '@services/get-page-title.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryJumpToPageInputService } from '../library-jump-to-page-input.service';
import { LibraryServicesModule } from '../library-services.module';
import { LoadLibraryService } from './load-library.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { Title } from '@angular/platform-browser';


@Injectable({providedIn: LibraryServicesModule})
export class RunTasksAfterLibraryRouteParamsReceivedService implements IDoThis {

	constructor(
		private __loadLibrary: LoadLibraryService,
		private __jumpToPageInput: LibraryJumpToPageInputService,
		private __title: Title
	) {}


	async go(params): Promise<void> {
		requestedLibrary.name = params[paramID.libName];
		this.__title.setTitle(getPageTitle.go(['Library', requestedLibrary.name]));

		let pageNum = Number(params[paramID.pageNumber]);
		await this.__loadLibrary.go(requestedLibrary.name, pageNum);
	}

}
