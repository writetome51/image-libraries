import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';
import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';
import { ModuleTitleData as moduleTitle } from '@app/routed-modules/library/module-title.data';
import { Title } from '@angular/platform-browser';
import { LoadLibraryService } from './load-library.service';


@Injectable({providedIn: 'root'})
export class RunTasksAfterLibraryRouteParamsReceivedService implements IDoThis {

	constructor(
		private __loadLibrary: LoadLibraryService,
		private __title: Title
	) {
	}


	async go(params): Promise<void> {
		requestedLibrary.name = params[paramID.libName];
		let pageNum = Number(params[paramID.pageNumber]);

		await this.__loadLibrary.go(requestedLibrary.name, pageNum);
		this.__title.setTitle(moduleTitle.data + requestedLibrary.name);
	}

}
