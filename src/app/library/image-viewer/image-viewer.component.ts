import { Component } from '@angular/core';
import { LoadedLibraryData as library } from '../../data/runtime-state-data/loaded-library.data';


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
