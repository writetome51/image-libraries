import { Component } from '@angular/core';
import { LibraryPaginatorService } from '../library-paginator_service/library-paginator.service';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { HasImageTotalComponent } from '@abstract-components/has-image-total.abstract.component';
import { LibraryJumpToPageInputService }
	from '@app/routed-modules/library_module/library-jump-to-page-input.service';
import { RouteParamIDData as paramID } from '@read-only-data/route-param-id.data';
import { ImagesViewerContainer } from '@interfaces/images-viewer-container.interface';


@Component({
	selector: 'library-viewer',
	template: `
		<library-change-controls></library-change-controls>
		<delete-library-button></delete-library-button>

		<show-images-if-they-exist [container]="this">
			<library-images-list></library-images-list>
		</show-images-if-they-exist>
	`
})
export class LibraryViewerComponent extends HasImageTotalComponent
	implements ImagesViewerContainer {

	routeBeforePageNumber = `/library/${paramID.libName}/page`;


	constructor(
		__storedImageTotal: LoadedLibraryImageTotalService,
		public paginator: LibraryPaginatorService,
		public jumpToPageInput: LibraryJumpToPageInputService
	) {
		super(__storedImageTotal);
	}

}
