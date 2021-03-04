import { AppPaginatorDataSourceService } from
	'@app-paginator/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total_service/library-images-data-total.service';
import { LibraryServicesModule } from '../../library-services.module';
import { ProcessGetLibraryImagesService }
	from './process-get-library-images_service/process-get-library-images.service';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__process_set_loadedImages: ProcessGetLibraryImagesService,
		__dataTotal: LibraryImagesDataTotalService
	) {
		super(__process_set_loadedImages, __dataTotal);
	}

}
