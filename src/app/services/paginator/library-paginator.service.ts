import { PaginatorService } from './paginator.service';
import { LibraryPaginatorDataSourceService }
	from './paginator-data-source/library-paginator-data-source.service';


export class LibraryPaginatorService extends PaginatorService {

	constructor(__dataSource: LibraryPaginatorDataSourceService) {
		super(__dataSource);
	}

}
