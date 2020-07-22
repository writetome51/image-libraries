import { Component } from '@angular/core';
import { LibraryChangesService } from '../../shared/services/library/library-changes.service';
import { BackgroundProcessingStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/background-processing-status.data';
import { ImageTotalData as imageTotal }
	from '../../../data-structures/runtime-state-data/static-classes/resettable-to-default/image-total.data';
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
		return operationStatus.waiting;
	}


	constructor(
		private __paginator: LibraryPaginatorService,
		private __libraryChanges: LibraryChangesService
	) {
	}

}
