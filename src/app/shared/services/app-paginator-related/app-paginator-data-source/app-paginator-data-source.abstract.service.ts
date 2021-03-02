import { DataTotalService } from '../data-total.abstract.service';
import { ProcessDataTransportService }
	from '@services/process-related/process-data-transport.abstract.service';
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
		private __set_loadedImages_processor: ProcessDataTransportService,
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
		await this.__set_loadedImages_processor.go();

		if (hasValue(loadedImages.data)) return loadedImages.data;
		else return [];
	}

}
