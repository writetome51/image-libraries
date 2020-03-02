import { Injectable } from '@angular/core';
import { GetLibraryImagesProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-library-images-processor.service';
import { PaginatorDataSourceService } from './paginator-data-source.service';


@Injectable({providedIn: 'root'})

export class LibraryPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(__getLibraryImagesProcessor: GetLibraryImagesProcessorService) {
		super(__getLibraryImagesProcessor);
	}

}
