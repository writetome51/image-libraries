import { Component } from '@angular/core';
import { LibraryChangesService } from '@services/library-related/library-changes.service';
import { LibraryPaginatorService } from '../library-paginator_service/library-paginator.service';
import { LibraryImageTotalInBrowserStorageService }
	from '@services/browser-storage-related/library-image-total-in-browser-storage.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get imageTotal(): number {
		return this.__imageTotalInBrowser.get();
	}


	get pageNumber() {
		return this.__paginator.getCurrentPageNumber();
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryChanges: LibraryChangesService,
		private __imageTotalInBrowser: LibraryImageTotalInBrowserStorageService
	) {
	}

}
