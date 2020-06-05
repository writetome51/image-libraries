import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';
import { AllImagesPaginatorService } from '../../paginator/all-images-paginator.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(
		_allImagesPaginator: AllImagesPaginatorService
	) {
		super(_allImagesPaginator);
	}

}
