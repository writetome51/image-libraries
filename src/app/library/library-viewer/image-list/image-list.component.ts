import { Component, OnDestroy } from '@angular/core';
import { AppImage } from '../../../interfaces/app-image';
import { ImagesToDisplayService } from '../../../services/image/images-to-display.service';


@Component({
	selector: 'image-list',
	templateUrl: './image-list.component.html',
	styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnDestroy {

	get images(): AppImage[] {
		return this.__imagesToDisplay.data;
	}


	constructor(private __imagesToDisplay: ImagesToDisplayService) {
	}


	ngOnDestroy(): void {
		this.__imagesToDisplay.subscription.unsubscribe();
	}

}
