import { PaginatorService } from './paginator.service';
import { LibraryPaginatorDataSourceService }
	from './paginator-data-source/library-paginator-data-source.service';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class LibraryPaginatorService extends PaginatorService {

	constructor(__dataSource: LibraryPaginatorDataSourceService) {
		super(__dataSource);
	}

}
