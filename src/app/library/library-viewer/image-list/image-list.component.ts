import { Component } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { CurrentLibraryService } from '../../../services/library/current-library.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	get images(): AppImage[] {
		if (this.__loadedLibrary.hasChanges && this.__loadedLibrary.changes.images){
			return this.__loadedLibrary.changes.images;
		}
		else return this.__loadedLibrary.images;
	}


	constructor(private __loadedLibrary: CurrentLibraryService) {
	}

}
