import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { ImagesListComponent }
	from '@abstract-components/images-list.abstract.component';


@Component({
	selector: 'all-images-list',
	template: `
		<ul>
			<li class="grid-list-item" *ngFor="let image of data">
				<thumbnail-image-container [image]="image"
					[imageRouterLink]="[fullSizeImageRoute, image.name]"
				></thumbnail-image-container>
			</li>
		</ul>
	`
})
export class AllImagesListComponent extends ImagesListComponent {

	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}

}
