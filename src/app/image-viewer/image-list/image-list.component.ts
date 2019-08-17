import { Component } from '@angular/core';
import { LibraryService } from '../../services/library.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {


	constructor(
		private __library: LibraryService
	) {
	}


	get images(): any[] {
		return this.__library.images;
	}


}
