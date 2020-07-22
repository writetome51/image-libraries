import { Component } from '@angular/core';
import { DBImage } from '../../../interfaces/db-image';
import { AllImagesPaginatorService }
	from '../services/all-images-paginator/all-images-paginator.service';
import { AppModuleRoutesData as appModuleRoutes } from '../../app-module-routes.data';
import { PageImagesData as pageImages }
	from '../../../data-structures/runtime-state-data/static-classes/resettable-to-default/page-images.data';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		// If the currentPage is undefined it triggers error, so we catch it:
		try {
			pageImages.data =  this.allImagesPaginator.getCurrentPage();
			return pageImages.data;
		}
		catch (e) {
			return undefined;
		}
	}


	get fullSizeImageRoute(){
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}

	constructor(public allImagesPaginator: AllImagesPaginatorService) {
	}

}
