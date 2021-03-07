import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { AllImagesDataTotalService } from './all-images-data-total.service';
import { ProcessGetAllImagesService }
	from './process-get-all-images_service/process-get-all-images.service';
import { Injectable } from '@angular/core';
import { AllImagesServicesModule } from '../../all-images-services.module';
import { LoadedImageStateService }
	from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: AllImagesServicesModule})
export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__setLoadedImages: ProcessGetAllImagesService,
		__dataTotal: AllImagesDataTotalService,
		__loadedImageState: LoadedImageStateService
	) {
		super(__setLoadedImages, __dataTotal, __loadedImageState);
	}

}
