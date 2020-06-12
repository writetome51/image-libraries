import { Component } from '@angular/core';
import { AllImagesPaginatorService } from '../services/paginator/all-images-paginator.service';
import { AllImagesJumpToPageNumberInputService }
	from '../services/validating-input/jump-to-page-number/all-images-jump-to-page-number-input.service';


@Component({
	selector: 'pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="'/all-images/page'"
			[paginator]="allImagesPaginator" [jumpToPageInput]="allImagesJumpToPageNumberInput"
		>
		</app-pagination-controls>
	`
})
export class AllImagesPaginationControlsComponent {

	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		public allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService
	) {
	}

}
