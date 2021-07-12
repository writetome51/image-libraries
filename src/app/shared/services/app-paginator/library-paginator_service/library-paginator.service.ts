import { AppPaginatorService } from '@app-paginator/app-paginator.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryPaginatorDataSourceService }
	from './library-paginator-data-source_service/library-paginator-data-source.service';
import { PageSizeInBrowserStorageService } from '@browser-storage/page-size-in-browser-storage.service';


@Injectable({providedIn: 'root'})
export class LibraryPaginatorService extends AppPaginatorService {

	constructor(
		__pageSizeInBrowser: PageSizeInBrowserStorageService,
		__dataSource: LibraryPaginatorDataSourceService
	) {
		super(__pageSizeInBrowser, __dataSource);
	}

}
