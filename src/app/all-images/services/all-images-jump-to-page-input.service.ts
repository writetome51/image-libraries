import { AllImagesPaginatorService } from './all-images-paginator/all-images-paginator.service';
import { Injectable } from '@angular/core';
import { JumpToPageInputService } from '@app-pagination-controls/jump-to-page-input.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: AllImagesPaginatorService) {
		super(_paginator);
	}

}
