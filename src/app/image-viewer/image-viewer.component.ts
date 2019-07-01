import { Component } from '@angular/core';
import { LibrarySaverService } from '../services/library-saver.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	fileSavingInfo = `The library is saved to a file you download.  When you save changes, your device 
	downloads a new version.`;

	editMode = false;


	constructor(
		private __librarySaver: LibrarySaverService
	) {
	}


	saveChanges() {
		this.__librarySaver.save();
	}


}
