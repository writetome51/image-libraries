import { Component } from '@angular/core';
import { LibraryChangesService } from '@services/library/library-changes.service';
import { BackgroundProcessingStatusData as processingStatus }
	from '@runtime-state-data/background-processing-status.data';
import { ImageTotalData as imageTotal } from '@runtime-state-data/static-classes/auto-resettable.data';
import { LibraryPaginatorService } from '../services/library-paginator/library-paginator.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get imageTotal() {
		return imageTotal.data;
	}


	get pageNumber() {
		return this.__paginator.getCurrentPageNumber();
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	get verifyingLibrary(): boolean {
		return processingStatus.waiting;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryChanges: LibraryChangesService
	) {
	}

}
