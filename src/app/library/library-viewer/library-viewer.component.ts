import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { DisplayedImagesService } from '../../services/image/displayed-images.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	addingImages = false;


	get hasImages(): boolean {
		return this.__imagesToDisplay.exist;
	}


	get changesExist(): boolean {
		return this.__libraryChanges.exist;
	}


	get addImagesButtonText() {
		return (this.addingImages ? 'Cancel' : 'Add Images');
	}


	constructor(
		private __libraryChanges: LibraryChangesService,
		private __imagesToDisplay: DisplayedImagesService
	) {
	}


}
