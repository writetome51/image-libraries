import { Component } from '@angular/core';
import { ImagesViewerContextDirective }
	from '@abstract-directives/images-viewer-context.abstract.directive';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { LibraryJumpToPageInputService } from './library-jump-to-page-input.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';


@Component({
	selector: 'library-viewer',
	template: `
		<delete-library-button></delete-library-button>

		<images-viewer [context]="this">
			<library-images-list></library-images-list>
		</images-viewer>
	`
})
export class LibraryViewerComponent extends ImagesViewerContextDirective {

	routeBeforePageNumber = `/library/${requestedLibrary.name}/page`;


	constructor(
		protected _storedImageTotal: LoadedLibraryImageTotalService,
		public paginator: LibraryPaginatorService,
		public jumpToPageInput: LibraryJumpToPageInputService
	) {
		super();
	}

}
