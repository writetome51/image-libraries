import { AppPaginatorDataSourceService }
	from '@services/app-paginator-related/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { ProcessGetLibraryImagesService }
	from './process-get-library-images_service/process-get-library-images.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total.service';
import { LibraryServicesModule } from '@app/routed-modules/library/library-services.module';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__process: ProcessGetLibraryImagesService,
		__dataTotal: LibraryImagesDataTotalService
	) {
		super(__process, __dataTotal);
	}

}
