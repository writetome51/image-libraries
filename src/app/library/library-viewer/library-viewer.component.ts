import { Component, OnInit } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { OperationStatusData as operationStatus }
	from '../../data/runtime-state-data/operation-status.data';
import { LibraryPaginatorService } from '../../services/paginator/library-paginator.service';
import { LoadedImagesData as loadedImages }
	from '../../data/runtime-state-data/static-classes/loaded-images.data';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent implements OnInit {

	get currentPage() {
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
		// To make the loading spinner run as soon as this component is accessed:
		operationStatus.waiting = true;

		//temp
		console.log('LibraryViewerComponent constructor()');
	}


	ngOnInit(): void {
		//temp
		console.log('LibraryViewerComponent ngOnInit()');
	}


}
