import { Injectable } from '@angular/core';
import { JumpToPageNumberInputService } from './jump-to-page-number-input.service';
import { LibraryPaginatorService } from '../../app-paginator/library-paginator.service';


@Injectable({providedIn: 'root'})

export class LibraryJumpToPageNumberInputService extends JumpToPageNumberInputService {

	constructor(_paginator: LibraryPaginatorService) {
		super(_paginator);
	}

}
