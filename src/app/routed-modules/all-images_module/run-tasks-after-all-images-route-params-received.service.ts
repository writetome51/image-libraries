import { AllImagesPaginatorService }
	from '@app-paginator/all-images-paginator_service/all-images-paginator.service';
import { AllImagesJumpToPageInputService } from './all-images-jump-to-page-input.service';
import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { AllImagesServicesModule } from './all-images-services.module';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { SetCurrentPageImagesService } from '@services/set-current-page-images.service';


@Injectable({providedIn: AllImagesServicesModule})
export class RunTasksAfterAllImagesRouteParamsReceivedService implements IDoThis {

	constructor(
		private __setCurrentPageImages: SetCurrentPageImagesService,
		private __paginator: AllImagesPaginatorService,
		private __jumpToPageInput: AllImagesJumpToPageInputService,
		private __loadedImageState: LoadedImagesStateService
	) {}


	async go(params): Promise<void> {
		let pageNum = Number(params[paramID.pageNumber]);

		if (this.__imagesNotLoaded()) await this.__reloadPage(pageNum);
		else await this.__setPage(pageNum);
	}


	private __imagesNotLoaded(): boolean {
		return not(this.__loadedImageState.getOrigin() === 'all');
	}


	private async __reloadPage(num) {
		await this.__setCurrentPageImages.go(num, this.__paginator, {reload: true});
	}


	private async __setPage(num) {
		await this.__setCurrentPageImages.go(num, this.__paginator);
	}

}
