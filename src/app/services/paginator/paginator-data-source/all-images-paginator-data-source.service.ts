import { Injectable } from '@angular/core';
import { GetAllImagesProcessorService }
	from '../../data-transport-processor/image-fetching-processor/get-all-images-processor.service';
import { PaginatorDataSourceService } from './paginator-data-source.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { SetInitialDataTotalForAllImagesService }
	from './set-initial-data-total-for-all-images.service';
import { DBImage } from '../../../interfaces/db-image';
import { BatchData as batch } from '../../../data-structures/runtime-state-data/static-classes/batch.data';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/operation-status.data';
import { LoadedImagesData as loadedImages }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-library.data';


@Injectable({providedIn: 'root'})

export class AllImagesPaginatorDataSourceService extends PaginatorDataSourceService {

	constructor(
		__getAllImagesProcessor: GetAllImagesProcessorService,
		__setInitial_dataTotal: SetInitialDataTotalForAllImagesService
	) {
		super(__getAllImagesProcessor, __setInitial_dataTotal);
	}


	protected _getSomethingFrom_loadedImages(): DBImage[] {
		return Object.values(loadedImages.data);
	}


}
