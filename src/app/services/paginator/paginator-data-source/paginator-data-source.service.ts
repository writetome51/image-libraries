import { hasValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../../../data-structures/runtime-state-data/operation-status.data';
import { ImageTotalData as imageTotal }
	from '../../../../data-structures/runtime-state-data/static-classes/image-total.data';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { DBImage } from '../../../../interfaces/db-image';
import { SetInitialDataTotalService } from './set-initial-data-total.service';
import { BatchNumberData as batchNumber }
	from '../../../../data-structures/runtime-state-data/static-classes/batch-number.data';
import { DataTransportProcessorService }
	from '../../data-transport-processor/data-transport-processor.service';


export abstract class PaginatorDataSourceService {

	get dataTotal(): number {
		return imageTotal.data;
	}


	constructor(
		protected _processor: DataTransportProcessorService,
		private __setInitial_dataTotal: SetInitialDataTotalService
	) {
	}


	async setInitial_dataTotal() {
		await this.__setInitial_dataTotal.go();
	}


	async getBatch(
		batchNum: number, itemsPerBatch: number, isLastBatch: boolean
	): Promise<DBImage[]> {

		batchNumber.data = batchNum;

		await performDataProcessRequiringWaiting.go(this._processor, operationStatus);
		if (hasValue(loadedImages.data)) {
			return this._getSomethingFrom_loadedImages();
		}
		else return [];
	}


	protected abstract _getSomethingFrom_loadedImages(): DBImage[]

}
