import { AppPaginatorDataSourceService }
	from '@services/app-paginator/app-paginator-data-source.service';
import { LibraryImagesDataTotalService } from './library-images-data-total.service';
import { GetLibraryProcessorService } from './get-library-processor/get-library-processor.service';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getLibraryProcessor: GetLibraryProcessorService,
		__dataTotal: LibraryImagesDataTotalService
	) {
		super(__getLibraryProcessor, __dataTotal);
	}

}
