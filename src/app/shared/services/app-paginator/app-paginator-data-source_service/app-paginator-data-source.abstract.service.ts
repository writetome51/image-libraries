import { BigDatasetPaginatorDataSource } from './big-dataset-paginator-data-source.interface';
import { DataTotalService } from '../data-total.abstract.service';
import { ImageDBRecord } from '@interfaces/image-db-record.interface';
import { LoadData as load }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LoadedImageStateService }
	from '@services/loaded-image-state_service/loaded-image-state.service';
import { SetLoadedImages } from '@interfaces/set-loaded-images.interface';


export abstract class AppPaginatorDataSourceService implements BigDatasetPaginatorDataSource {

	get dataTotal(): number {
		return this.__dataTotal.get();
	}


	constructor(
		private __dataTotal: DataTotalService,
		private __setLoadedImages: SetLoadedImages,
		private __loadedImageState: LoadedImageStateService
	) {}


	async set_dataTotal() {
		await this.__dataTotal.set();
	}


	async getLoad(
		loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
	): Promise<ImageDBRecord[]> {

		load.number = loadNumber;
		await this.__setLoadedImages.go(load);

		return this.__loadedImageState.getLoadedImages();
	}

}
