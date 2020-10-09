import { Injectable } from '@angular/core';
import { JumpToPageInputService }
	from '@app-pagination-controls/jump-to-page-input.service';
import { LibraryPaginatorService } from '../services/library-paginator/library-paginator.service';


@Injectable({providedIn: 'root'})

export class LibraryJumpToPageInputService extends JumpToPageInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
