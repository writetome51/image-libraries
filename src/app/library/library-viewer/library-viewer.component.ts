import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { OperationStatusData as operationStatus }
	from '../../../data-structures/runtime-state-data/operation-status.data';
import { ImageTotalData as imageTotal }
	from '../../../data-structures/runtime-state-data/static-classes/image-total.data';
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
