import { Component, Input } from '@angular/core';
import { ImagesViewerContextComponent }
	from '@abstract-components/images-viewer-context.abstract.component';


@Component({
	selector: 'images-viewer',
	template: `
		<div>
			<p *ngIf="context.imageTotal === 0">{{ noImagesMessage }}</p>

			<ng-container *ngIf="context.imageTotal > 0">

				<global-action-menu></global-action-menu>
				<image-size-slider></image-size-slider>

				<ng-content></ng-content> <!--  images list  -->

				<app-pagination-controls
					[paginator]="context.paginator"
					[routeBeforePageNumber]="context.routeBeforePageNumber"
					[jumpToPageInput]="context.jumpToPageInput"
				></app-pagination-controls>

			</ng-container>
		</div>
	`
})
export class ImagesViewerComponent {

	@Input() context: ImagesViewerContextComponent;
	@Input() noImagesMessage = 'No Images';

}
