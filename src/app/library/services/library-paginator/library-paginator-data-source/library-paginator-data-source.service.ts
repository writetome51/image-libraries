import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source/app-paginator-data-source.service';
import { GetLibraryImagesProcessorService }
	from './get-library-images-processor/get-library-images-processor.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total/library-images-data-total.service';


@Injectable({providedIn: 'root'})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__processor: GetLibraryImagesProcessorService,
		__dataTotal: LibraryImagesDataTotalService
	) {
		super(__processor, __dataTotal);
	}

}
