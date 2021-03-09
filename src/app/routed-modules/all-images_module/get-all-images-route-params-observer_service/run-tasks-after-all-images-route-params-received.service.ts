import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { AllImagesServicesModule } from '../all-images-services.module';
import { LoadedImageStateService }
	from '@services/loaded-image-state_service/loaded-image-state.service';


@Injectable({providedIn: AllImagesServicesModule})
export class RunTasksAfterAllImagesRouteParamsReceivedService implements IDoThis {


	constructor(
		private __paginator: AllImagesPaginatorService,
		private __jumpToPageInput: AllImagesJumpToPageInputService,
		private __loadedImageState: LoadedImageStateService
	) {
	}


	async go(params): Promise<void> {

		if (this.__allImagesNotLoaded()) {
			await this.__paginator.initialize();
			this.__jumpToPageInput.setMaxValue();
		}

		let page = Number(params[paramID.pageNumber]);
		await this.__paginator.setCurrentPageNumber(page);
	}


	private __allImagesNotLoaded(): boolean {
		return not(this.__loadedImageState.getOrigin() === 'all');
	}

}
