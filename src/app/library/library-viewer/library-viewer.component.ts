import { Component } from '@angular/core';
import { LibraryChangesService as libraryChanges }
	from '../../services/library/library-changes.service';
import { ImagesToDisplayService } from '../../services/image/images-to-display.service';


@Component({
	selector: 'library-viewer',
	templateUrl: './library-viewer.component.html'
})
export class LibraryViewerComponent {

	addingImages = false;


	get hasImages(): boolean {
		return ImagesToDisplayService.exist;
	}


	get changesExist(): boolean {
		return libraryChanges.exist;
	}


	get addImagesButtonText() {
		return (this.addingImages ? 'Cancel' : 'Add Images');
	}


}
