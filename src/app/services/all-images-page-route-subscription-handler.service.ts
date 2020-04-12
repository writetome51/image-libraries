import { Injectable } from '@angular/core';
import { CurrentRouteService } from './current-route.service';
import { LoadedImagesData as loadedImages }
	from '../data-structures/runtime-state-data/static-classes/loaded-images.data';
import { AllImagesStatusData as allImagesStatus }
	from '../data-structures/runtime-state-data/static-classes/all-images-status.data';
import { URLParamIDData as paramID } from '../data-structures/read-only-data/url-param-id.data';
import { OperationStatusData as operationStatus }
	from '../data-structures/runtime-state-data/operation-status.data';
import { noValue } from '@writetome51/has-value-no-value';
import { not } from '@writetome51/not';
import { AllImagesPaginatorService } from './paginator/all-images-paginator.service';
import { AllImagesJumpToPageNumberInputService }
	from './validating-input/all-images-jump-to-page-number-input.service';
import { Handler } from '../interfaces/handler';


@Injectable({providedIn: 'root'})

export class AllImagesPageRouteSubscriptionHandlerService implements Handler {


	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		public allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService
	) {
	}


	async handle(params) {

		if (noValue(loadedImages.data) || not(allImagesStatus.loaded)) {
			await this.allImagesPaginator.reset();
			allImagesStatus.loaded = true;
			this.allImagesJumpToPageNumberInput.setMax();
		}

		let page = Number(params[paramID.pageNumber]);
		await this.allImagesPaginator.set_currentPageNumber(page);
		operationStatus.waiting = false;
	}


}
