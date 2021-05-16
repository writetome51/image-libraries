import { Component, Input } from '@angular/core';
import { ImagesViewerContainerComponent }
	from '@abstract-components/images-viewer-container.abstract.component';


@Component({
	selector: 'images-viewer',
	template: `
		<global-action-menu></global-action-menu>
		<image-size-slider></image-size-slider>

		<ng-content></ng-content> <!--  images list  -->

		<app-pagination-controls
			[paginator]="container.paginator"
			[routeBeforePageNumber]="container.routeBeforePageNumber"
			[jumpToPageInput]="container.jumpToPageInput"
		></app-pagination-controls>
	`
})
export class ImagesViewerComponent {

	@Input() container: ImagesViewerContainerComponent;

}
