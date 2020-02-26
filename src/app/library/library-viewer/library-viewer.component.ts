import { Component } from '@angular/core';
import { LibraryChangesService } from '../../services/library/library-changes.service';
import { DisplayedImagesService } from '../../services/image/displayed-images.service';


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


	constructor(
		private __libraryChanges: LibraryChangesService,
		private __displayedImages: DisplayedImagesService,
	) {
	}


}
