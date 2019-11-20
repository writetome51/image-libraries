import { Component } from '@angular/core';
import { CurrentLibraryService as currentLibrary} from '../../services/library/current-library.service';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html'
})
export class ImageViewerComponent {


	get currentImage(){
		return currentLibrary.currentImage;
	}

}
