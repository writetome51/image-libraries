import { Component } from '@angular/core';
import { CurrentLibraryService } from '../../services/library/current-library.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {


	get currentImage() {
		return this.__loadedLibrary.data.currentImage;
	}


	constructor(private __loadedLibrary: CurrentLibraryService) {
	}

}
