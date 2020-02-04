import { Component } from '@angular/core';
import { DBImage } from '../../../interfaces/db-image';
import { ImagesToDisplayService } from '../../../services/image/images-to-display.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	get images(): DBImage[] {
		return this.__imagesToDisplay.data;
	}


	constructor(private __imagesToDisplay: ImagesToDisplayService) {
	}

}
