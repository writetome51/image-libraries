import { Component } from '@angular/core';
import { ImagesViewerContextDirective }
	from '@abstract-directives/images-viewer-context.abstract.directive';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { LibraryJumpToPageNumberInputService } from './library-jump-to-page-number-input.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';


@Component({
	selector: 'library-viewer',
	template: `
		<images-viewer [context]="this">
			<library-images-list></library-images-list>
		</images-viewer>

		<delete-library-button></delete-library-button>
	`
})
export class LibraryViewerComponent extends ImagesViewerContextDirective {

	routeBeforePageNumber = `/library/${requestedLibrary.name}/page`;


	constructor(
		protected _storedImageTotal: LoadedLibraryImageTotalService,
		public paginator: LibraryPaginatorService,
		public jumpToPageNumberInput: LibraryJumpToPageNumberInputService
	) {
		super();
	}

}
