import { AllImagesJumpToPageInputService }
	from '../all-images-jump-to-page-input.service';
import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { Component } from '@angular/core';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';


@Component({
	selector: 'all-images-pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="routeBeforePageNumber"
			[paginator]="paginator"
			[jumpToPageInput]="jumpToPageInput"
		>
		</app-pagination-controls>
	`
})
export class AllImagesPaginationControlsComponent {

	modulePath = appModulePath.AllImagesModule;
	routeBeforePageNumber = `${this.modulePath}/page`;


	constructor(
		public paginator: AllImagesPaginatorService,
		public jumpToPageInput: AllImagesJumpToPageInputService
	) {
	}

}
