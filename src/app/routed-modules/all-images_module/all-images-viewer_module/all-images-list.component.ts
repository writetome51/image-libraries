import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';
import { HasDataInputDirective } from '@abstract-directives/has-data-input.abstract.directive';
import { ImageRecord } from '@interfaces/image-record.interface';
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
export class AllImagesListComponent extends HasDataInputDirective<ImageRecord[]> {

	pageImages = CurrentPageImagesData;

	get fullSizeImageRoute() {
		return '/' + appModulePath.FullSizeImageViewerModule;
	}

}
