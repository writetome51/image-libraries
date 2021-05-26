import { Component } from '@angular/core';
import { ThumbnailDisplaySettingsData as thumbnailDisplaySettings }
	from '@runtime-state-data/static-classes/auto-resettable.data';


@Component({
	selector: 'image-size-slider',
	template: `
		<div id="input-container">

			<!--  size slider    -->
			<label for="image-size-control" hidden>Image Size Control</label>
			Change image size:
			<input type="range" id="image-size-control" min="50" max="400" [(ngModel)]="imageWidth">
			<!-- / size slider   -->

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
