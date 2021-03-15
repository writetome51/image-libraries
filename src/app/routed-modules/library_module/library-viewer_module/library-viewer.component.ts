import { Component } from '@angular/core';
import { LibraryPaginatorService } from '../library-paginator_service/library-paginator.service';
import { LoadedLibraryImageTotalService }
	from '@services/library/loaded-library-image-total.service';
import { ImagesViewerComponent } from '@abstract-components/images-viewer.abstract.component';
import { LibraryJumpToPageInputService }
	from '@app/routed-modules/library_module/library-jump-to-page-input.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent extends ImagesViewerComponent {

	constructor(
		__storedImageTotal: LoadedLibraryImageTotalService,
		paginator: LibraryPaginatorService,
		jumpToPageInput: LibraryJumpToPageInputService
	) {
		super(__storedImageTotal, paginator, jumpToPageInput);
	}

}
