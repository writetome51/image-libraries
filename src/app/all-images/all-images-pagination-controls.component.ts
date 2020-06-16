import { Component } from '@angular/core';
import { AllImagesPaginatorService } from '../services/app-paginator/all-images-paginator.service';
import { AllImagesJumpToPageNumberInputService }
	from '../services/validating-input/jump-to-page-number/all-images-jump-to-page-number-input.service';
import { AppNavigatorModuleRoutesData } from '../app-navigator/app-navigator-module-routes.data';


@Component({
	selector: 'pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="routeBeforePageNumber"
			[paginator]="allImagesPaginator" [jumpToPageInput]="allImagesJumpToPageNumberInput"
		>
		</app-pagination-controls>
	`
})
export class AllImagesPaginationControlsComponent {

	moduleRoute = AppNavigatorModuleRoutesData.AllImagesModule;
	routeBeforePageNumber = `${this.moduleRoute}/page`;


	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		public allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService
	) {
	}

}
