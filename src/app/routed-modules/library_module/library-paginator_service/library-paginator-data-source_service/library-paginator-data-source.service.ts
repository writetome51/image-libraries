import { AppPaginatorDataSourceService } from
	'@app-paginator/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total_service/library-images-data-total.service';
import { LibraryServicesModule } from '../../library-services.module';
import { ProcessGetLibraryImagesService }
	from './process-get-library-images_service/process-get-library-images.service';
import { LoadedImageStateService } from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: LibraryServicesModule})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__setLoadedImages: ProcessGetLibraryImagesService,
		__dataTotal: LibraryImagesDataTotalService,
		__loadedImageState: LoadedImageStateService
	) {
		super(__setLoadedImages, __dataTotal, __loadedImageState);
	}

}
