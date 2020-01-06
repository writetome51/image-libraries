import { Component } from '@angular/core';
import { LoadedLibraryService as currentLibrary }
	from '../../services/library/loaded-library.service';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {


	get currentImage() {
		return currentLibrary.currentImage;
	}

}
