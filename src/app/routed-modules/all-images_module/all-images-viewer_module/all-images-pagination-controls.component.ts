import { AllImagesJumpToPageInputService } from '../all-images-jump-to-page-input.service';
import { AllImagesPaginatorService }
	from '../all-images-paginator_service/all-images-paginator.service';
import { AppModulePathData as appModulePath } from '@app/app-module-path.data';
import { Component } from '@angular/core';


@Component({
	selector: 'all-images-pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePage]="routeBeforePageNumber"
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
	) {}

}
