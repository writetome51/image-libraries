import { AppPaginatorDataSourceService } from
		'@app-paginator/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { Injectable } from '@angular/core';
import { LibraryImagesDataTotalService }
	from './library-images-data-total_service/library-images-data-total.service';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { ProcessGetLibraryImagesService }
	from './process-get-library-images_service/process-get-library-images.service';


@Injectable({providedIn: 'root'})
export class LibraryPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__dataTotal: LibraryImagesDataTotalService,
		__setLoadedImages: ProcessGetLibraryImagesService,
		__loadedImageState: LoadedImagesStateService
	) {
		super(__dataTotal, __setLoadedImages, __loadedImageState);
	}

}
