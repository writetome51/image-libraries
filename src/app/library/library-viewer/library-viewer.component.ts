import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { OperationStatusData as operationStatus }
	from '../../data/runtime-state-data/operation-status.data';
import { LibraryPaginatorService } from '../../services/paginator/library-paginator.service';
import { DisplayedImagesService as displayedImages }
	from '../../services/image/displayed-images.service';
import { ImageTotalData as imageTotal }
	from '../../data/runtime-state-data/static-classes/image-total.data';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get imageTotal() {
		return imageTotal.data;
	}


	get currentPage() {
		return displayedImages.data;
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
	}

}
