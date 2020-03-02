import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { OperationStatusData as operationStatus }
	from '../../data/runtime-state-data/operation-status.data';
import { LibraryPaginatorService } from '../../services/paginator/library-paginator.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get images() {
		return this.__libraryPaginator.currentPage;
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	get verifyingLibrary(): boolean {
		return operationStatus.waiting;
	}


	constructor(
		private __libraryChanges: LibraryChangesService,
		private __libraryPaginator: LibraryPaginatorService
	) {
	}


}
