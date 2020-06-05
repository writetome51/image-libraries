import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';
import { AllImagesPaginatorService } from '../../paginator/all-images-paginator.service';
import { LibraryPaginatorService } from '../../paginator/library-paginator.service';


@Injectable({providedIn: 'root'})

export class LibraryJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(
		_allImagesPaginator: LibraryPaginatorService
	) {
		super(_allImagesPaginator);
	}

}
