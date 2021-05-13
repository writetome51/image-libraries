import { Component, Input } from '@angular/core';
import { ImagesViewerContainer } from '@interfaces/images-viewer-container.interface';


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

	@Input() container: ImagesViewerContainer;

}
