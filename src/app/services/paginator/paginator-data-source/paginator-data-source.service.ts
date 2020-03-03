import { BatchData } from '../../../data/runtime-state-data/batch.data';
import { hasValue, noValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../../data/runtime-state-data/operation-status.data';
import { TotalImagesData as totalImages } from '../../../data/runtime-state-data/total-images.data';
import { ImageFetchingProcessorService }
	from '../../data-transport-processor/image-fetching-processor/image-fetching-processor.service';
import { LoadedImagesData as loadedImages } from '../../../data/runtime-state-data/loaded-images.data';
import { LoadedLibraryData as loadedLibrary }
	from '../../../data/runtime-state-data/loaded-library.data';
import { DBImage } from '../../../interfaces/db-image';
import { SetInitialDataTotalService } from './set-initial-data-total.service';


export abstract class PaginatorDataSourceService {

	get dataTotal(): number {
		return totalImages.data;
	}


	constructor(
		private __processor: ImageFetchingProcessorService,
		private __setInitial_dataTotal: SetInitialDataTotalService
	) {
	}


	async setInitial_dataTotal() {
		await this.__setInitial_dataTotal.go();
	}


	async getBatch(
		batchNumber: number, itemsPerBatch: number, isLastBatch: boolean
	): Promise<DBImage[]> {

		BatchData.number = batchNumber;
		BatchData.size = itemsPerBatch;

		await performDataProcessRequiringWaiting.go(this.__processor, operationStatus);
		if (hasValue(loadedImages.data)) {
			return loadedLibrary.data._image_ids.map((id) => loadedImages.data[id]);
		}
		else return [];
	}


}
