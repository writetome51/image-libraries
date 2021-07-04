import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { CurrentPageImagesData } from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'all-images-list',
	template: `
		<ul>
			<li class="grid-list-item" *ngFor="let image of pageImages.data">
				<thumbnail-image-container [image]="image"
					[imageRouterLink]="[fullSizeImageRoute, image.name]"
				></thumbnail-image-container>
			</li>
		</ul>
	`
})
export class AllImagesListComponent {

	pageImages = CurrentPageImagesData;

	get fullSizeImageRoute() {
		return '/' + appModulePath.FullSizeImageViewerModule;
	}

}
