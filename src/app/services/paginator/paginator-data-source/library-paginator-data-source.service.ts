import { Injectable } from '@angular/core';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { SetInitialDataTotalForLibraryService }
	from './set-initial-data-total-for-library.service';
import { GetLibraryProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-library-processor.service';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(
		__getLibraryProcessor: GetLibraryProcessorService,
		__setInitial_dataTotal_forLibrary: SetInitialDataTotalForLibraryService
	) {
		super(__getLibraryProcessor, __setInitial_dataTotal_forLibrary);
	}

}
