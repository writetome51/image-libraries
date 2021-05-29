import { AppModulePathData as appModuleRoutes } from '../../../app-module-path.data';
import { Component } from '@angular/core';
import { HasDataInputDirective } from '@app/shared/abstract-directives/has-data-input.abstract.directive';
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
export class AllImagesListComponent extends HasDataInputDirective<ImageRecord[]> {

	get fullSizeImageRoute() {
		return '/' + appModuleRoutes.FullSizeImageViewerModule;
	}

}
