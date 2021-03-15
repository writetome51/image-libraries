import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { ImageListComponent }
	from '@abstract-components/image-list.abstract.component';


@Component({
	selector: 'all-images-list',
	template: `
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
export class AllImagesListComponent extends ImageListComponent {

	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}


	constructor(__paginator: AllImagesPaginatorService) {
		super(__paginator);
	}

}
