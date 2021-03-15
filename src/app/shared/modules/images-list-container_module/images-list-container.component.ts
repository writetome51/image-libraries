import { Component, Input } from '@angular/core';
import { JumpToPageInputService }
	from '@app-pagination-controls_module/jump-to-page-input.abstract.service';


@Component({
	selector: 'images-list-container',
	template: `
		<global-action-menu></global-action-menu>
		<image-size-slider></image-size-slider>

		<ng-content></ng-content><!--  images list  -->

		<app-pagination-controls
			[paginator]="paginator"  [routeBeforePageNumber]="routeBeforePageNumber"
			[jumpToPageInput]="jumpToPageInput"
		></app-pagination-controls>
	`
})
export class ImagesListContainerComponent {

	@Input() paginator: { getCurrentPageNumber: () => number, getTotalPages: () => number };
	@Input() routeBeforePageNumber: string;
	@Input() jumpToPageInput: JumpToPageInputService;

}
