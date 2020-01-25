import { Component } from '@angular/core';
import { CurrentLibraryData as library } from '../../data/current-library.data';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	get currentImage() {
		return library.data.currentImage;
	}

}
