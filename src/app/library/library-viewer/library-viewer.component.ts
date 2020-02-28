import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { DisplayedImagesService } from '../../services/image/displayed-images.service';
import { LibraryVerificationStatusData as libraryVerificationStatus }
	from '../../data/runtime-state-data/library-verification-status.data';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	get images(){
		return this.__displayedImages.data;
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	get verifyingLibrary(): boolean {
		return libraryVerificationStatus.waiting;
	}


	constructor(
		private __libraryChanges: LibraryChangesService,
		private __displayedImages: DisplayedImagesService,
	) {
	}


}
