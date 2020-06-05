import { Injectable } from '@angular/core';
import { AllImagesPaginatorService } from '../paginator/all-images-paginator.service';
import { LoadedImagesData as loadedImages }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { LoadedImagesStatusData as loadedImagesStatus }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-images-status.data';
import { OperationStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/operation-status.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { AllImagesJumpToPageNumberInputService }
	from '../validating-input/jump-to-page-number/all-images-jump-to-page-number-input.service';
import { AllImagesRouteParamsHandlerService } from './all-images-route-params-handler.service';
import { LoadedLibraryData as loadedLibrary }
	from '../../../data-structures/runtime-state-data/static-classes/loaded-library.data';
import { IDoThis } from '../../../interfaces/i-do-this';


@Injectable({providedIn: 'root'})

export class GetAllImagesRouteParamsSubscriptionHandlerService implements IDoThis {


	constructor(
		private __allImagesPaginator: AllImagesPaginatorService,
		private __allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService,
		private __routeParamsHandler: AllImagesRouteParamsHandlerService
	) {
	}


	go(): (params) => Promise<void> {
		operationStatus.waiting = true;

		return async (params) => {

			if (noValue(loadedImages.data) || not(loadedImagesStatus.data === 'all')) {
				await this.__allImagesPaginator.reset();
				this.__allImagesJumpToPageNumberInput.setMax();
				loadedImagesStatus.data = 'all';
				loadedLibrary.data = undefined;
			}

			await this.__routeParamsHandler.handle(params);
			operationStatus.waiting = false;
		};

	}


}
