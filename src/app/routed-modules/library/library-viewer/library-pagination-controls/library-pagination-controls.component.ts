import { Component } from '@angular/core';
import { LibraryPaginatorService }
	from '../../services/library-paginator/library-paginator.service';
import { LibraryJumpToPageInputService } from './library-jump-to-page-input.service';
import { URLParamIDData as paramID } from '@read-only-data/url-param-id.data';


@Component({
	selector: 'library-pagination-controls',
	template: `
		<app-pagination-controls
			[routeBeforePageNumber]="routeBeforePageNumber"
			[paginator]="paginator"
			[jumpToPageInput]="jumpToPageInput"
		>
		</app-pagination-controls>
	`
})
export class LibraryPaginationControlsComponent {

	get routeBeforePageNumber() {
		return `/library/${paramID.libName}/page`;
	}


	constructor(
		public paginator: LibraryPaginatorService,
		public jumpToPageInput: LibraryJumpToPageInputService
	) {
	}

}
