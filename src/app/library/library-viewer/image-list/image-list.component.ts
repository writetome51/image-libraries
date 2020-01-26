import { Component } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { ImagesToDisplayService as imagesToDisplay }
	from '../../../services/image/images-to-display.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {

	get images(): AppImage[] {
		return imagesToDisplay.data;
	}

}
