import { AppPaginatorService } from './app-paginator.service';
import { LibraryPaginatorDataSourceService }
	from './app-paginator-data-source/library-paginator-data-source.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class LibraryPaginatorService extends AppPaginatorService {

	constructor(__dataSource: LibraryPaginatorDataSourceService) {
		super(__dataSource);
	}

}
