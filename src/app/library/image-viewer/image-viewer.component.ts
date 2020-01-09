import { Component } from '@angular/core';
import { LoadedLibraryService } from '../../services/library/loaded-library.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {


	get currentImage() {
		return this.__loadedLibrary.data.currentImage;
	}


	constructor(private __loadedLibrary: LoadedLibraryService) {
	}

}
