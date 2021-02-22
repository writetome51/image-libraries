import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source/app-paginator-data-source.abstract.service';
import { AllImagesDataTotalService } from './all-images-data-total.service';
import { GetAllImagesProcessorService } from './get-all-images-processor_service/get-all-images-processor.service';
import { Injectable } from '@angular/core';
import { AllImagesServicesModule }
	from '@app/routed-modules/all-images/all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: GetAllImagesProcessorService,
		__dataTotal: AllImagesDataTotalService
	) {
		super(__getAllImagesProcessor, __dataTotal);
	}

}
