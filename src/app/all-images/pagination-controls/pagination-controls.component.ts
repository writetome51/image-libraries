import { Component } from '@angular/core';
import { AllImagesPaginatorService } from '../../services/paginator/all-images-paginator.service';
import { AllImagesJumpToPageNumberInputService }
	from '../../services/validating-input/all-images-jump-to-page-number-input.service';


@Component({
	selector: 'pagination-controls',
	templateUrl: './pagination-controls.component.html'
})
export class PaginationControlsComponent {

	constructor(
		public allImagesPaginator: AllImagesPaginatorService,
		public allImagesJumpToPageNumberInput: AllImagesJumpToPageNumberInputService
	) {
	}

}
