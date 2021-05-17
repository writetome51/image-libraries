import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { HasDataInputComponent } from '@abstract-components/has-data-input.abstract.component';
import { ImageRecord } from '@interfaces/image-record.interface';


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
export class AllImagesListComponent extends HasDataInputComponent<ImageRecord[]> {

	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}

}
