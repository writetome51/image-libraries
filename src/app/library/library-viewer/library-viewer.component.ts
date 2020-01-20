import { Component } from '@angular/core';
import { CurrentLibraryService } from '../../services/library/current-library.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	addingImages = false;


	get changesExist(): boolean {
		return this.__currentLibrary.hasChanges;
	}


	get addImagesButtonText() {
		return (this.addingImages ? 'Cancel' : 'Add Images');
	}


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


}
