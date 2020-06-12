import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService }
	from '../../data-transport-processor/get-images/get-all-images-processor.service';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { DataTotalForAllImagesService }
	from './data-total-for-all-images.service';
import { DBImage } from '../../../../interfaces/db-image';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';


@Injectable({providedIn: 'root'})

export class AllImagesPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: GetAllImagesProcessorService,
		__set_dataTotal: DataTotalForAllImagesService
	) {
		super(__getAllImagesProcessor, __set_dataTotal);
	}


	protected _getSomethingFrom_loadedImages(): DBImage[] {
		return Object.values(loadedImages.data);
	}


}
