import { Component } from '@angular/core';
import { LibraryPaginatorService } from '../services/library-paginator/library-paginator.service';
import { LibraryJumpToPageNumberInputService } from './library-jump-to-page-number-input.service';
import { URLParamIDData } from '../../../data-structures/read-only-data/url-param-id.data';


@Component({
	selector: 'pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="'/library/' + paramID.libName + '/page'"
			[paginator]="libraryPaginator" [jumpToPageInput]="libraryJumpToPageNumberInput"
		>
		</app-pagination-controls>
	`
})
export class LibraryPaginationControlsComponent {

	paramID = URLParamIDData;

	constructor(
		public libraryPaginator: LibraryPaginatorService,
		public libraryJumpToPageNumberInput: LibraryJumpToPageNumberInputService
	) {
	}

}
