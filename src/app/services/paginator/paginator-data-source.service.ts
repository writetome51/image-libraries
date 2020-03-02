import { BatchData } from '../../data/runtime-state-data/batch.data';
import { DisplayedImagesService as displayedImages } from '../image/displayed-images.service';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../data/runtime-state-data/operation-status.data';
import { TotalImagesData as totalImages } from '../../data/runtime-state-data/total-images.data';
import { ImageFetchingProcessorService }
	from '../data-transport-processor/image-fetching-processor/image-fetching-processor.service';


export abstract class PaginatorDataSourceService {

	get dataTotal(): number {
		return totalImages.data;
	}


	constructor(private __processor: ImageFetchingProcessorService) {
	}


	async getBatch(
		batchNumber: number, itemsPerBatch: number, isLastBatch: boolean
	): Promise<any[]> {

		BatchData.number = batchNumber;
		BatchData.size = itemsPerBatch;

		await performDataProcessRequiringWaiting.go(this.__processor, operationStatus);
		return displayedImages.data;
	}


}
