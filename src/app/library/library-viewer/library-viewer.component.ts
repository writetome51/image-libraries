import { Component } from '@angular/core';
import { CurrentLibraryService } from '../../services/library/current-library.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	addingImages = false;
	addImagesButtonText = (this.addingImages ? 'Cancel' : 'New Library');


	get changesExist(): boolean {
		return this.__currentLibrary.hasChanges;
	}


	constructor(private __currentLibrary: CurrentLibraryService) {
	}


}
