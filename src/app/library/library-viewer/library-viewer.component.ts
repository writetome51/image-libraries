import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { OperationStatusData as libraryVerificationStatus }
	from '../../data/runtime-state-data/operation-status.data';
import { PaginatorService } from '../../services/paginator/paginator.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get images() {
		return this.__paginator.currentPage;
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	get verifyingLibrary(): boolean {
		return libraryVerificationStatus.waiting;
	}


	constructor(
		private __libraryChanges: LibraryChangesService,
		private __paginator: PaginatorService
	) {
	}


}
