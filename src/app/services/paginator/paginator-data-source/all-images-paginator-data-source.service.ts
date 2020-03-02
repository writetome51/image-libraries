import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-all-images-processor.service';
import { PaginatorDataSourceService } from './paginator-data-source.service';


@Injectable({providedIn: 'root'})

export class AllImagesPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(__getAllImagesProcessor: GetAllImagesProcessorService) {
		super(__getAllImagesProcessor);
	}

}
