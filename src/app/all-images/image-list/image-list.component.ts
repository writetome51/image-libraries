import { AllImagesPaginatorService }
	from '../services/all-images-paginator/all-images-paginator.service';
import { AppModuleRoutesData as appModuleRoutes } from '../../app-module-routes.data';
import { Component } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { GetPageDataService as getPageData } from '@services/get-page-data.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return getPageData.go(this.allImagesPaginator);
	}


	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}


	constructor(public allImagesPaginator: AllImagesPaginatorService) {
	}

}
