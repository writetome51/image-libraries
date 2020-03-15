import { Injectable } from '@angular/core';
import { AllImagesPaginatorService } from '../paginator/all-images-paginator.service';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';


@Injectable({providedIn: 'root'})

export class AllImagesJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(private __allImagesPaginator: AllImagesPaginatorService) {
		super(__allImagesPaginator);

		this.data.objectToMatch = this.__allImagesPaginator;
		this.data.propertyToMatch = 'totalPages';
	}

}
