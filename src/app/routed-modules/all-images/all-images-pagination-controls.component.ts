import { AllImagesJumpToPageInputService } from './services/all-images-jump-to-page-input.service';
import { AllImagesPaginatorService }
	from './services/all-images-paginator/all-images-paginator.service';
import { NavigatorLinkData as navigatorLink }
	from '@logged-in-app-navigator/navigator-link.data';
import { Component } from '@angular/core';


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

	modulePath = navigatorLink.AllImagesModule.path;
	routeBeforePageNumber = `${this.modulePath}/page`;


	constructor(
		public paginator: AllImagesPaginatorService,
		public jumpToPageInput: AllImagesJumpToPageInputService
	) {
	}

}
