import { Component } from '@angular/core';
import { LibraryService } from '../../services/library/library.service';
import { AppImage } from '../../../interfaces/app-image';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {


	constructor(private __library: LibraryService) {
	}


	get images(): AppImage[] {
		return this.__library.images;
	}


}
