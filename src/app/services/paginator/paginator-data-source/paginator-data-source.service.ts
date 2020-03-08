import { BatchData as batch } from '../../../data-structures/runtime-state-data/static-classes/batch.data';
import { hasValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/operation-status.data';
import { ImageTotalData as imageTotal }
	from '../../../data-structures/runtime-state-data/static-classes/image-total.data';
import { ImageFetchingProcessorService }
	from '../../data-transport-processor/image-fetching-processor/image-fetching-processor.service';
import { LoadedImagesData as loadedImages }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { DBImage } from '../../../interfaces/db-image';
import { SetInitialDataTotalService } from './set-initial-data-total.service';


export abstract class PaginatorDataSourceService {

	get dataTotal(): number {
		return imageTotal.data;
	}


	constructor(
		protected _processor: ImageFetchingProcessorService,
		private __setInitial_dataTotal: SetInitialDataTotalService
	) {

	}


	async setInitial_dataTotal() {
		await this.__setInitial_dataTotal.go();
	}


	async getBatch(
		batchNumber: number, itemsPerBatch: number, isLastBatch: boolean
	): Promise<DBImage[]> {

		batch.number = batchNumber;

		await performDataProcessRequiringWaiting.go(this._processor, operationStatus);
		if (hasValue(loadedImages.data)) {
			return this._getSomethingFrom_loadedImages();
		}
		else return [];
	}


	protected abstract _getSomethingFrom_loadedImages(): DBImage[]

}
