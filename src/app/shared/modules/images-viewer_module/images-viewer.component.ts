import { Component, Input } from '@angular/core';
import { ImagesViewerContextDirective }
	from '@abstract-directives/images-viewer-context.abstract.directive';
import { HasContextInputDirective }
	from '@abstract-directives/has-context-input.abstract.directive';


@Component({
	selector: 'images-viewer',
	template: `
		<div>
			<p *ngIf="context.imageTotal === 0">{{ noImagesMessage }}</p>

			<ng-container *ngIf="context.imageTotal > 0">

				<div id="size-slider-and-action-menu-container">
					<div id="slider-container"><image-size-slider></image-size-slider></div>

					<div id="global-menu-container"><global-action-menu></global-action-menu></div>
				</div>

				<ng-content></ng-content> <!--  images list  -->

				<app-pagination-controls
					[paginator]="context.paginator"
					[routeBeforePageNumber]="context.routeBeforePageNumber"
					[jumpToPageInput]="context.jumpToPageNumberInput"
				></app-pagination-controls>

			</ng-container>
		</div>
	`,
	styles: [
		`#size-slider-and-action-menu-container {
			width: 100%;
			margin-bottom: 30px;
		}`,
		`#size-slider-and-action-menu-container div {
			display: inline-grid;
			position: relative;
		}`,
		`div#slider-container {
			margin-right: 50px;
			min-width: 200px;
		}`,
		`div#global-menu-container {
			margin-left: 50px;
			top:10px;
		}`
	]
})
export class ImagesViewerComponent extends HasContextInputDirective<ImagesViewerContextDirective> {

	@Input() noImagesMessage = 'No Images';

}
