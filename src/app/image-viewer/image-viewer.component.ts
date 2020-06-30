import { Component } from '@angular/core';
import { LoadedLibraryData as loadedLibrary }
	from '../../data-structures/runtime-state-data/static-classes/loaded-library.data';


@Component({
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	get currentImage() {
		//return loadedLibrary.data.currentImage;
		return {};
	}

}
