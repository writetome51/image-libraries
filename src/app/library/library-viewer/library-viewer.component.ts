import { Component } from '@angular/core';
import { CurrentLibraryData as library } from '../../data/current-library.data';
import { LibraryChangesService as libraryChanges }
	from '../../services/library/library-changes.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	addingImages = false;


	get hasImages(): boolean {
		return (library.data.images.length > 0);
	}


	get changesExist(): boolean {
		return libraryChanges.exist;
	}


	get addImagesButtonText() {
		return (this.addingImages ? 'Cancel' : 'Add Images');
	}


}
