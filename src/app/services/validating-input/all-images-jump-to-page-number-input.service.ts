import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';
import { AllImagesPaginatorService } from '../paginator/all-images-paginator.service';
import { Router } from '@angular/router';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(
		_allImagesPaginator: AllImagesPaginatorService,
		__router: Router
	) {
		super(_allImagesPaginator, __router);
	}

}
