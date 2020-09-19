import { AllImagesJumpToPageInputService } from './services/all-images-jump-to-page-input.service';
import { AllImagesPaginatorService }
	from './services/all-images-paginator/all-images-paginator.service';
import { AppNavigatorModuleRoutesData as appNavigatorModuleRoutes }
	from '@app-navigator/app-navigator-module-routes.data';
import { Component } from '@angular/core';


@Component({
	selector: 'pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="routeBeforePageNumber"
			[paginator]="allImagesPaginator" [jumpToPageInput]="allImagesJumpToPageInput"
		>
		</app-pagination-controls>
	`
})
export class AllImagesPaginationControlsComponent {

	moduleRoute = appNavigatorModuleRoutes.AllImagesModule;
	routeBeforePageNumber = `${this.moduleRoute}/page`;


	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		public allImagesJumpToPageInput: AllImagesJumpToPageInputService
	) {
	}

}
