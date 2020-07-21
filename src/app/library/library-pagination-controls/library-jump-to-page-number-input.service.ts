import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService }
	from '../../shared-modules/app-pagination-controls/jump-to-page-number-input.service';
import { LibraryPaginatorService } from '../services/library-paginator/library-paginator.service';


@Injectable({providedIn: 'root'})

export class LibraryJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
