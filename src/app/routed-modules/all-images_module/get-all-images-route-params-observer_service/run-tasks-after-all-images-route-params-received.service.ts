import { AllImagesPaginatorService }
	from '../../../shared/services/app-paginator/all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { AllImagesServicesModule } from '../all-images-services.module';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';


@Injectable({providedIn: AllImagesServicesModule})
export class RunTasksAfterAllImagesRouteParamsReceivedService implements IDoThis {

	constructor(
		private __paginator: AllImagesPaginatorService,
		private __jumpToPageInput: AllImagesJumpToPageInputService,
		private __loadedImageState: LoadedImagesStateService
	) {}


	async go(params): Promise<void> {
		let pageNum = Number(params[paramID.pageNumber]);

		if (this.__allNotLoaded()) await this.__refreshLoadAndSetPage(pageNum);
		else await this.__setPage(pageNum);

	//	this.__jumpToPageInput.setMaxValue();
	}


	private __allNotLoaded(): boolean {
		return not(this.__loadedImageState.getOrigin() === 'all');
	}


	private async __refreshLoadAndSetPage(num) {
		await this.__paginator.setCurrentPageNumber(num, {reload: true});
	}


	private async __setPage(num) {
		await this.__paginator.setCurrentPageNumber(num);
	}

}
