import { LoadData as batch }
	from '../../../../data-structures/runtime-state-data/static-classes/load.data';
import { DBImage } from '../../../../interfaces/db-image';
import { DataTotalService } from './data-total/data-total.service';
import { DataTransportProcessorService }
	from '../../data-transport-processor/data-transport-processor.service';
import { hasValue } from '@writetome51/has-value-no-value';
import { LoadedImagesData as loadedImages }
	from '../../../../data-structures/runtime-state-data/static-classes/loaded-images.data';


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

		batch.number = loadNum;
		await this.__set_loadedImages_processor.process();

		if (hasValue(loadedImages.data)) {
			return this._getSomethingFrom_loadedImages();
		}
		else return [];
	}


	protected abstract _getSomethingFrom_loadedImages(): DBImage[]

}
