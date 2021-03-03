import { DataTotalService } from '../data-total.abstract.service';
import { ProcessDbOperationService }
	from '@services/process/process-db-operation.abstract.service';
import { DBImage } from '@interfaces/db-image.interface';
import { hasValue } from '@writetome51/has-value-no-value';
import { LoadData as load, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { BigDatasetPaginatorDataSource } from './big-dataset-paginator-data-source.interface';


export abstract class AppPaginatorDataSourceService implements BigDatasetPaginatorDataSource {

	get dataTotal(): number {
		return this.__dataTotal.get();
	}


	constructor(
		private __process_set_loadedImages: ProcessDbOperationService,
		private __dataTotal: DataTotalService
	) {
	}


	async set_dataTotal() {
		await this.__dataTotal.set();
	}


	async getLoad(
		loadNum: number, itemsPerLoad: number, isLastLoad: boolean
	): Promise<DBImage[]> {

		load.number = loadNum;
		await this.__process_set_loadedImages.go();

		if (hasValue(loadedImages.data)) return loadedImages.data;
		else return [];
	}

}
