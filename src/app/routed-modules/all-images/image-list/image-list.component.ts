import { AllImagesPaginatorService }
	from '../services/all-images-paginator/all-images-paginator.service';
import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { GetPageImagesService as getPageImages } from '@services/get-page-images.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return getPageImages.go(this.allImagesPaginator);
	}


	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}


	constructor(public allImagesPaginator: AllImagesPaginatorService) {
	}

}
