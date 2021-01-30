import { DataTotalService } from './data-total.service';
import { DataTransportProcessorService }
	from '@data-transport-processor/data-transport-processor.service';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { hasValue } from '@writetome51/has-value-no-value';
import { LoadData as load, LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


export abstract class AppPaginatorDataSourceService {

	get dataTotal(): number {
		return this.__dataTotal.get();
	}


	constructor(
		private __set_loadedImages_processor: DataTransportProcessorService,
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
		await this.__set_loadedImages_processor.process();

		if (hasValue(loadedImages.data)) return loadedImages.data;
		else return [];
	}

}
