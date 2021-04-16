import { Component } from '@angular/core';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'image-size-slider',
	template: `
		<div id="input-container">

			<label for="image-size-control" hidden>Image Size Control</label>
			Change size:
			<input type="range" id="image-size-control" min="0" max="400" [(ngModel)]="imageWidth">

		</div>
	`
})
export class ImageSizeSliderComponent {

	set imageWidth(value) {
		thumbnailDisplaySettings.width = value;
	}


	get imageWidth() {
		return thumbnailDisplaySettings.width;
	}

}
