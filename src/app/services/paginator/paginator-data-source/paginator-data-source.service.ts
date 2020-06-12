import { BatchData as batch }
	from '../../../../data-structures/runtime-state-data/static-classes/batch.data';
import { DBImage } from '../../../../interfaces/db-image';
import { DataTotalService } from './data-total.service';
import { DataTransportProcessorService }
	from '../../data-transport-processor/data-transport-processor.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { PerformDataProcessRequiringWaitingService as performDataProcessRequiringWaiting }
	from '../../perform-data-process-requiring-waiting.service';
import { OperationStatusData as operationStatus }
	from '../../../../data-structures/runtime-state-data/operation-status.data';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';


export abstract class PaginatorDataSourceService {

	get dataTotal(): number {
		return this.__dataTotal.get();
	}


	constructor(
		protected _processor: DataTransportProcessorService,
		private __dataTotal: DataTotalService
	) {
	}


	async set_dataTotal() {
		await this.__dataTotal.set();
	}


	async getBatch(
		batchNum: number, itemsPerBatch: number, isLastBatch: boolean
	): Promise<DBImage[]> {

		batch.number = batchNum;

		await performDataProcessRequiringWaiting.go(this._processor, operationStatus);
		if (hasValue(loadedImages.data)) {
			return this._getSomethingFrom_loadedImages();
		}
		else return [];
	}


	protected abstract _getSomethingFrom_loadedImages(): DBImage[]

}
