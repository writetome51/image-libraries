import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService } from './get-all-images-processor.service';
import { AppPaginatorDataSourceService }
	from '@services/app-paginator/app-paginator-data-source.service';
import { DataTotalForAllImagesService } from './data-total-for-all-images.service';


@Injectable({providedIn: 'root'})

export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: GetAllImagesProcessorService,
		__dataTotal: DataTotalForAllImagesService
	) {
		super(__getAllImagesProcessor, __dataTotal);
	}

}
