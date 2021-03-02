import { AppPaginatorDataSourceService }
	from '@services/app-paginator-related/app-paginator-data-source/app-paginator-data-source.abstract.service';
import { ProcessGetLibraryImagesService }
	from './get-library-images-processor_service/process-get-library-images.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__processor: ProcessGetLibraryImagesService,
		__dataTotal: LibraryImagesDataTotalService
	) {
		super(__processor, __dataTotal);
	}

}
