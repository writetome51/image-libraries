import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService }
	from '../../services/validating-input/jump-to-page-number/jump-to-page-number-input.service';
import { LibraryPaginatorService } from '../services/library-paginator.service';


@Injectable({providedIn: 'root'})

export class LibraryJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
