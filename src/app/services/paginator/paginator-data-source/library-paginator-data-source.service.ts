import { Injectable } from '@angular/core';
import { GetLibraryImagesProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-library-images-processor.service';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { SetInitialDataTotalForLibraryImagesService }
	from './set-initial-data-total-for-library-images.service';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(
		__getLibraryImagesProcessor: GetLibraryImagesProcessorService,
		__setInitial_dataTotal_forLibraryImages: SetInitialDataTotalForLibraryImagesService
	) {
		super(__getLibraryImagesProcessor, __setInitial_dataTotal_forLibraryImages);
	}

}
