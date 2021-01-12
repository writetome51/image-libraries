import { AllImagesJumpToPageInputService } from './services/all-images-jump-to-page-input.service';
import { AllImagesPaginatorService }
	from './services/all-images-paginator/all-images-paginator.service';
import { AppNavigatorChoiceData as choice } from '@app-navigator/app-navigator-choice.data';
import { Component } from '@angular/core';


@Component({
	selector: 'pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="routeBeforePageNumber"
			[paginator]="paginator" [jumpToPageInput]="jumpToPageInput"
		>
		</app-pagination-controls>
	`
})
export class AllImagesPaginationControlsComponent {

	moduleRoute = choice.AllImagesModule.path;
	routeBeforePageNumber = `${this.moduleRoute}/page`;


	constructor(
		public paginator: AllImagesPaginatorService,
		public jumpToPageInput: AllImagesJumpToPageInputService
	) {
	}

}
