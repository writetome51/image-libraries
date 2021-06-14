import { AppPaginatorDataSourceService }
	from '@app-paginator/app-paginator-data-source_service/app-paginator-data-source.abstract.service';
import { AllImagesDataTotalService } from './all-images-data-total.service';
import { ProcessGetAllImagesService }
	from './process-get-all-images_service/process-get-all-images.service';
import { Injectable } from '@angular/core';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';


@Injectable({providedIn: 'root'})
export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__dataTotal: AllImagesDataTotalService,
		__setLoadedImages: ProcessGetAllImagesService,
		__loadedImageState: LoadedImagesStateService
	) {
		super(__dataTotal, __setLoadedImages, __loadedImageState);
	}

}
