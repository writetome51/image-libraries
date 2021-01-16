import { AllImagesPaginatorService }
	from '../services/all-images-paginator/all-images-paginator.service';
import { AppModuleRoutesData as appModuleRoutes } from '../../app-module-routes.data';
import { Component } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image';
import { PageImagesData as pageImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		try {
			// Caches reference to paginator's current page, which is emptied on logout.
			pageImages.data = this.allImagesPaginator.getCurrentPage();
			return pageImages.data;
		}
		// If the current page doesnt exist it triggers error, so we catch it:
		catch (e) {
			return undefined;
		}
	}


	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}


	constructor(public allImagesPaginator: AllImagesPaginatorService) {
	}

}
