import { appName } from '@string-constants/app-name';
import { GetFormattedPageTitleService as getFormattedPageTitle }
	from '@services/get-formatted-page-title.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { LibraryJumpToPageInputService } from '../../library-jump-to-page-input.service';
import { LibraryServicesModule } from '../../library-services.module';
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
		let pageNum = Number(params[paramID.pageNumber]);

		this.__title.setTitle(
			getFormattedPageTitle.go([appName, 'Library', requestedLibrary.name])
		);
		await this.__loadLibrary.go(requestedLibrary.name, pageNum);

		this.__jumpToPageInput.setMaxValue();
	}

}
