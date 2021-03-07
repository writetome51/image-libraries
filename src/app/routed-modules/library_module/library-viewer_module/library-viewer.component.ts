import { Component } from '@angular/core';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { LibraryPaginatorService } from '../library-paginator_service/library-paginator.service';
import { LoadedImagesData as loadedImages }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get imageTotal(): number {
		return loadedImages.data.length;
	}


	get pageNumber() {
		return this.__paginator.getCurrentPageNumber();
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryChanges: LibraryChangesService
	) {
	}

}
