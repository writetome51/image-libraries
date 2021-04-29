import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { ImagesListComponent }
	from '@abstract-components/images-list.abstract.component';


@Component({
	selector: 'all-images-list',
	template: `
		<ul *ngIf="images && images.length > 0">

			<li class="grid-list-item" *ngFor="let img of images">
				<thumbnail-image-container [image]="img"
					[imageRouterLink]="[fullSizeImageRoute, img.name]"
				>
				</thumbnail-image-container>
			</li>

		</ul>
	`
})
export class AllImagesListComponent extends ImagesListComponent {

	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}


	constructor(__paginator: AllImagesPaginatorService) {
		super(__paginator);
	}

}
