import { Component } from '@angular/core';
import { DisplayedImagesService } from '../../../services/image/displayed-images.service';
import { DBImage } from '../../../interfaces/db-image';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html'
})
export class ImageListComponent {

	get images(): DBImage[] {
		return this.__imagesToDisplay.data;
	}


	constructor(private __imagesToDisplay: DisplayedImagesService) {
	}

}
