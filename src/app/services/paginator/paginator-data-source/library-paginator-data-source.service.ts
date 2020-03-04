import { Injectable } from '@angular/core';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { SetInitialDataTotalForLibraryImagesService }
	from './set-initial-data-total-for-library-images.service';
import { GetLibraryProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-library-processor.service';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(
		__getLibraryProcessor: GetLibraryProcessorService,
		__setInitial_dataTotal_forLibraryImages: SetInitialDataTotalForLibraryImagesService
	) {
		super(__getLibraryProcessor, __setInitial_dataTotal_forLibraryImages);
	}

}
