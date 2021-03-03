import { Component } from '@angular/core';
import { LibraryPaginatorService }
	from '../../library-paginator_service/library-paginator.service';
import { LibraryJumpToPageInputService } from './library-jump-to-page-input.service';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';


@Component({
	selector: 'library-pagination-controls',
	template: `
		<app-pagination-controls
				[routeBeforePage]="routeBeforePageNumber"
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
