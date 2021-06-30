import { Component } from '@angular/core';
import { LibraryPaginatorService }
	from '@app-paginator/library-paginator_service/library-paginator.service';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { ImagesViewerContextDirective }
	from '@app/shared/abstract-directives/images-viewer-context.abstract.directive';
import { LibraryJumpToPageInputService }
	from '@app/routed-modules/library_module/library-jump-to-page-input.service';
import { RequestedLibraryData as requestedLibrary }
	from '@runtime-state-data/requested-library.data';


@Component({
	selector: 'library-viewer',
	template: `
		<delete-library-button></delete-library-button>

		<images-viewer [context]="this">
			<library-images-list [data]="images"></library-images-list>
		</images-viewer>
	`
})
export class LibraryViewerComponent extends ImagesViewerContextDirective {

	routeBeforePageNumber = `/library/${requestedLibrary.name}/page`;


	constructor(
		public __storedImageTotal: LoadedLibraryImageTotalService,
		public paginator: LibraryPaginatorService,
		public jumpToPageInput: LibraryJumpToPageInputService
	) {
		super();
	}

}
