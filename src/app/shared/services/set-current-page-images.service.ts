import { ConfigurePaginatorService as configurePaginator }
	from '@app-paginator/configure-paginator.service';
import { CurrentPageImagesData as currentPageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { ImageRecord } from '@interfaces/image-record.interface';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { PageSizeInBrowserStorageService }
	from '@browser-storage/page-size-in-browser-storage.service';
import { setArray } from '@writetome51/set-array';


@Injectable({providedIn: 'root'})
export class SetCurrentPageImagesService implements IDoThis {

	constructor(private __pageSizeInBrowser: PageSizeInBrowserStorageService) {}


	async go(
		pageNum: number,
		paginator: {
			setCurrentPageNumber: (num: number, option?: { reload: boolean }) => Promise<void>,
			getCurrentPage: () => ImageRecord[]
		},
		option = {reload: false}

	): Promise<void> {

		configurePaginator.go(paginator, this.__pageSizeInBrowser.get());
		await paginator.setCurrentPageNumber(pageNum, option);

		// Caches reference to paginator's current page, which is emptied on logout.
		setArray(currentPageImages.data, paginator.getCurrentPage());
	}

}
