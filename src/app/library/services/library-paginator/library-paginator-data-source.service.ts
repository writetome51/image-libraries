import { AppPaginatorDataSourceService }
	from '../../../shared/services/app-paginator/app-paginator-data-source.service';
import { DataTotalForLibraryService }
	from './data-total-for-library.service';
import { GetLibraryProcessorService }
	from './get-library-processor/get-library-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getLibraryProcessor: GetLibraryProcessorService,
		__dataTotal: DataTotalForLibraryService
	) {
		super(__getLibraryProcessor, __dataTotal);
	}

}
