import { BigDatasetPaginatorDataSource } from './big-dataset-paginator-data-source.interface';
import { BackgroundExecutionStatusData as backgroundExecutionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { DataTotalService } from '../data-total.abstract.service';
import { ExecuteFunctionRequiringWaitingService as executeFunctionRequiringWaiting }
	from '@services/execute-function-requiring-waiting.service';
import { ImageRecord } from '@interfaces/image-record.interface';
import { LoadConfigurationData as loadConfig }
	from '@runtime-state-data/static-classes/auto-resettable.data';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { ProcessThatSetsLoadedImagesService }
	from '../process-that-sets-loaded-images.abstract.service';


export abstract class AppPaginatorDataSourceService implements BigDatasetPaginatorDataSource {

	get dataTotal(): number {
		return this.__dataTotal.get();
	}


	constructor(
		private __dataTotal: DataTotalService,
		private __setLoadedImages: ProcessThatSetsLoadedImagesService,
		private __loadedImageState: LoadedImagesStateService
	) {}


	async set_dataTotal() {
		await this.__dataTotal.set();
	}


	async getLoad(
		loadNumber: number, itemsPerLoad: number, isLastLoad: boolean
	): Promise<ImageRecord[]> {

		return await executeFunctionRequiringWaiting.go(
			async () => {
				loadConfig.number = loadNumber;
				await this.__setLoadedImages.go(loadConfig);
				return this.__loadedImageState.getImages();
			},
			backgroundExecutionStatus
		);
	}

}
