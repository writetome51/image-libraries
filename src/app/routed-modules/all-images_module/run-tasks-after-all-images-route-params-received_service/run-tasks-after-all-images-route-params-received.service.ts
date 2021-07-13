import { IDoThis } from '@interfaces/i-do-this.interface';
import { Injectable } from '@angular/core';
import { not } from '@writetome51/not';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { AllImagesServicesModule } from '../all-images-services.module';
import { LoadedImagesStateService }
	from '@services/loaded-images-state_service/loaded-images-state.service';
import { SetCurrentPageImagesOfAllImagesService }
	from './set-current-page-images-of-all-images.service';


@Injectable({providedIn: AllImagesServicesModule})
export class RunTasksAfterAllImagesRouteParamsReceivedService implements IDoThis {

	constructor(
		private __setCurrentPageImages: SetCurrentPageImagesOfAllImagesService,
		private __loadedImageState: LoadedImagesStateService
	) {}


	async go(params): Promise<void> {
		let pageNum = Number(params[paramID.pageNumber]);

		if (this.__imagesNotLoaded()) await this.__setCurrentPageImages.go(pageNum, {reload: true});
		else await this.__setCurrentPageImages.go(pageNum);
	}


	private __imagesNotLoaded(): boolean {
		return not(this.__loadedImageState.getOrigin() === 'all');
	}

}
