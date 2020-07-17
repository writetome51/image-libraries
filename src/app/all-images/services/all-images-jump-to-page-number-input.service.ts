import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService }
	from '../../services/validating-input/jump-to-page-number/jump-to-page-number-input.service';
import { AllImagesPaginatorService } from './all-images-paginator.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(_paginator: AllImagesPaginatorService) {
		super(_paginator);
	}

}
