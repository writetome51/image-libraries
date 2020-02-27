import { Component } from '@angular/core';
import { LibraryData as library } from '../../data/runtime-state-data/library.data';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	get currentImage() {
		//return library.data.currentImage;
		return {};
	}

}
