import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService }
	from '../../data-transport-processor/get-images/get-all-images-processor.service';
import { AppPaginatorDataSourceService } from './app-paginator-data-source.service';
import { DataTotalForAllImagesService }
	from './data-total/data-total-for-all-images.service';
import { DBImage } from '../../../../interfaces/db-image';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';


@Injectable({providedIn: 'root'})

export class AllImagesPaginatorDataSourceService extends AppPaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: GetAllImagesProcessorService,
		__dataTotal: DataTotalForAllImagesService
	) {
		super(__getAllImagesProcessor, __dataTotal);
	}


	protected _getSomethingFrom_loadedImages(): DBImage[] {
		return Object.values(loadedImages.data);
	}


}
