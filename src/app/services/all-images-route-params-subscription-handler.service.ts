import { Injectable } from '@angular/core';
import { AllImagesPaginatorService } from './paginator/all-images-paginator.service';
import { Handler } from '../../interfaces/handler';
import { LoadedImagesData as loadedImages }
	from '../../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { AllImagesStatusData as allImagesStatus }
	from '../../data-structures/runtime-state-data/static-classes/all-images-status.data';
import { OperationStatusData as operationStatus }
	from '../../data-structures/runtime-state-data/operation-status.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { AllImagesJumpToPageNumberInputService }
	from './validating-input/all-images-jump-to-page-number-input.service';
import { AllImagesRouteParamsHandlerService } from './all-images-route-params-handler.service';


@Injectable({providedIn: 'root'})

export class AllImagesRouteParamsSubscriptionHandlerService implements Handler {


	constructor(
		private __allImagesPaginator: AllImagesPaginatorService,
		private __allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService,
		private __routeParamsHandler: AllImagesRouteParamsHandlerService
	) {
	}


	handle() {
		operationStatus.waiting = true;

		return async (params) => {

			if (noValue(loadedImages.data) || not(allImagesStatus.loaded)) {
				await this.__allImagesPaginator.reset();
				this.__allImagesJumpToPageNumberInput.setMax();
				allImagesStatus.loaded = true;
			}

			await this.__routeParamsHandler.handle(params);
			operationStatus.waiting = false;
		};

	}


}
