import { Component } from '@angular/core';
import { CurrentLibraryService } from '../../services/library/current-library.service';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {

	constructor(private __currentLibrary: CurrentLibraryService) {
	}


	get currentImage(){
		return this.__currentLibrary.currentImage;
	}

}
