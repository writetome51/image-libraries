import { AllImagesPaginatorDataSourceService }
	from './all-images-paginator-data-source_service/all-images-paginator-data-source.service';
import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';
import { PageSizeInBrowserStorageService } from '@browser-storage/page-size-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class AllImagesPaginatorService extends AppPaginatorService {

	constructor(
		__pageSizeInBrowser: PageSizeInBrowserStorageService,
		__dataSource: AllImagesPaginatorDataSourceService
	) {
		super(__pageSizeInBrowser, __dataSource);
	}

}
