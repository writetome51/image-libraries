import { Component } from '@angular/core';
import { DisplayedImagesService } from '../../../services/image/displayed-images.service';
import { AppImage } from '../../../interfaces/app-image';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	get images(): AppImage[] {
		return this.__imagesToDisplay.data;
	}


	constructor(private __imagesToDisplay: DisplayedImagesService) {
	}

}
