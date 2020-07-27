import { AppPaginatorService } from '@services/app-paginator/app-paginator.service';
import { LibraryPaginatorDataSourceService } from './library-paginator-data-source.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class LibraryPaginatorService extends AppPaginatorService {

	constructor(__dataSource: LibraryPaginatorDataSourceService) {
		super(__dataSource);
	}

}
