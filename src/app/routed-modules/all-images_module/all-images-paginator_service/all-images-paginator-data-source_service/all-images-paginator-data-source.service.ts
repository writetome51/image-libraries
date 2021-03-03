import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { AllImagesDataTotalService } from './all-images-data-total.service';
import { ProcessGetAllImagesService }
	from './process-get-all-images_service/process-get-all-images.service';
import { Injectable } from '@angular/core';
import { AllImagesServicesModule } from '../../all-images-services.module';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: ProcessGetAllImagesService,
		__dataTotal: AllImagesDataTotalService
	) {
		super(__getAllImagesProcessor, __dataTotal);
	}

}
