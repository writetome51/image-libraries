import { BackgroundExecutionStatusData as executionStatus }
	from '@runtime-state-data/background-execution-status.data';
import { Component } from '@angular/core';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { LibraryPaginatorService } from '../services/library-paginator/library-paginator.service';
import { LibraryImageTotalInBrowserStorageService }
	from '@encrypted-item-in-browser-storage/library-image-total-in-browser-storage.service';


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


	get verifyingLibrary(): boolean {
		return executionStatus.waiting;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryChanges: LibraryChangesService,
		private __imageTotalInBrowser: LibraryImageTotalInBrowserStorageService
	) {
	}

}
