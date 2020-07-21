import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService }
	from '../../shared-modules/app-pagination-controls/jump-to-page-number-input.service';
import { AllImagesPaginatorService } from './all-images-paginator/all-images-paginator.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(_paginator: AllImagesPaginatorService) {
		super(_paginator);
	}

}
