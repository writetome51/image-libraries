import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source/app-paginator-data-source.service';
import { GetLibraryImagesProcessorService }
	from './get-library-images-processor/get-library-images-processor.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__processor: GetLibraryImagesProcessorService,
		__dataTotal: LibraryImagesDataTotalService
	) {
		super(__processor, __dataTotal);
	}

}
