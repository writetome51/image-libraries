import { Component } from '@angular/core';
import { AppImage } from '../../interfaces/app-image';
import { LoadedLibraryService } from '../../services/library/loaded-library.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	get images(): AppImage[] {
		return this.__currentLibrary.data.images;
	}


	constructor(private __currentLibrary: LoadedLibraryService) {
	}

}
