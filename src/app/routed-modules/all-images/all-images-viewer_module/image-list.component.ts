import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { DBImage } from '@interfaces/app-image/db-image.interface';
import { GetPageImagesService as getPageImages } from '@services/get-page-images.service';


@Component({
	selector: 'image-list',
	template: `
		<p *ngIf="images && images.length === 0">You have no images in your account.</p>

		<ul *ngIf="images && images.length > 0">

			<li class="grid-list-item" *ngFor="let img of images">
				<thumbnail-image-container [image]="img"
					[imageRouterLink]="[fullSizeImageRoute, img._id]"
				>
				</thumbnail-image-container>
			</li>

		</ul>
	`
})
export class ImageListComponent {

	get images(): DBImage[] {
		return getPageImages.go(this.__paginator);
	}


	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}


	constructor(private __paginator: AllImagesPaginatorService) {
	}

}
